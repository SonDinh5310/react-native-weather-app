import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import { commonStyles } from './src/components/CommonStyles';
import Loading from './src/components/Loading';
import Forecast from './src/components/Forecast';
import WeatherDetails from './src/components/WeatherDetails';
import WeatherMain from './src/components/WeatherMain';
import CustomError from './src/components/CustomError';
import { callApi } from './src/utils/Helpers';
import { API_KEY } from './src/configs/Keys';

export default function App() {
    const [location, setLocation] = useState('');
    const [data, setData] = useState(null);
    const [forecast, setForecast] = useState('');
    const [isLoading, setIsLoading] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const { fullWidth, border, mt20 } = commonStyles;

    const onSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await callApi(location, API_KEY);
            setData(res.resToday.data);
            setForecast(res.resForecast.data.list);
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
        setLocation('');
        setIsLoading(false);
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <TextInput
                placeholder="Enter a city name"
                value={location}
                onChangeText={(value) => setLocation(value)}
                onSubmitEditing={() => onSubmit()}
                style={[fullWidth, border, { padding: 10 }]}
            ></TextInput>
            {isLoading && <Loading />}
            {errorMsg && <CustomError message={errorMsg} />}
            {!errorMsg && data && !isLoading && (
                <View style={[fullWidth, mt20]}>
                    <View>
                        <WeatherMain data={data}></WeatherMain>

                        <WeatherDetails data={data}></WeatherDetails>

                        <Forecast forecastData={forecast}></Forecast>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbf8',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 30,
    },
});
