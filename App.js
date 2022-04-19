import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
    Dimensions,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWind, faDroplet, faGauge } from "@fortawesome/free-solid-svg-icons";
import CustomInfo from "./src/components/CustomInfo";
import Loading from "./src/components/Loading";
import Forecast from "./src/components/Forecast";

const axios = require("axios");

export default function App() {
    const [location, setLocation] = useState("");
    const [forecast, setForecast] = useState("");
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);
    const API_KEY = "cb7bdeb262be30cedd993a22bcd0be75";

    const callApi = async () => {
        setIsLoading(true);
        const resToday = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        );
        const resForecast = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=5&appid=${API_KEY}`
        );
        console.log(resToday.data);
        // console.log(resForecast.data);
        setData(resToday.data);
        setForecast(resForecast.data.list);
        setIsLoading(false);
    };

    const onSubmit = () => {
        console.log(location);
        callApi();
        setLocation("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter a city name"
                value={location}
                onChangeText={(value) => setLocation(value)}
                onSubmitEditing={() => onSubmit()}
                style={{
                    width: "100%",
                    padding: 10,
                    fontSize: 16,
                    border: "1px solid black",
                    borderRadius: 10,
                }}
            ></TextInput>
            {isLoading && <Loading />}
            {data && !isLoading && (
                <View style={{ width: "100%", marginTop: 20 }}>
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontSize: 40 }}>{data.name}</Text>
                        <Text style={{ fontSize: 60, marginTop: -15 }}>
                            {data.main.temp}°
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                textTransform: "capitalize",
                            }}
                        >
                            {data.weather[0].description}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text style={{ marginRight: 10, fontSize: 16 }}>
                                H: {data.main.temp_min}°
                            </Text>
                            <Text style={{ fontSize: 16 }}>
                                L: {data.main.temp_max}°
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "100%",
                                marginTop: 20,
                                padding: 10,
                                border: "1px solid black",
                                borderRadius: 10,
                            }}
                        >
                            <CustomInfo
                                icon={faWind}
                                infoTitle="Wind"
                                infoData={data.wind.speed}
                                unit="m/s"
                            ></CustomInfo>
                            <CustomInfo
                                icon={faDroplet}
                                infoTitle="Humidity"
                                infoData={data.main.humidity}
                                unit="%"
                            ></CustomInfo>
                            <CustomInfo
                                icon={faGauge}
                                infoTitle="Pressure"
                                infoData={data.main.pressure}
                                unit="hPa"
                            ></CustomInfo>
                        </View>
                        <Forecast forecastData={forecast}></Forecast>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 30,
    },
});
