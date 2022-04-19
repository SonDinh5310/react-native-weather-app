import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
} from 'react-native';
import * as Location from 'expo-location';

const axios = require('axios');

export default function App() {
    const [location, setLocation] = useState('');
    const [data, setData] = useState(null);
    const API_KEY = 'cb7bdeb262be30cedd993a22bcd0be75';

    const callApi = async () => {
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        );
        console.log(res.data);

        setData(res.data);
    };

    // callApi();
    const onSubmit = () => {
        console.log(location);
        callApi();
        setLocation('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter a city name"
                value={location}
                onChangeText={(value) => setLocation(value)}
                onSubmitEditing={() => onSubmit()}
            ></TextInput>
            {data && (
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 40 }}>{data.name}</Text>
                        <Text style={{ fontSize: 60, marginTop: -15 }}>
                            {data.main.temp}°
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                textTransform: 'capitalize',
                            }}
                        >
                            {data.weather[0].description}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Text style={{ marginRight: 10, fontSize: 16 }}>
                                H: {data.main.temp_min}°
                            </Text>
                            <Text style={{ fontSize: 16 }}>
                                L: {data.main.temp_max}°
                            </Text>
                        </View>
                        <View>
                            <View>
                                <Text>Wind</Text>
                                <Text>{data.wind.speed} m/s</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
});
