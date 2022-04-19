import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const axios = require("axios");

export default function App() {
    const [location, setLocation] = useState("");
    const API_KEY = "cb7bdeb262be30cedd993a22bcd0be75";

    const callApi = async () => {
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        );
        console.log(res.data);
    };

    callApi();

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="enter your location"
                value={location}
                onChangeText={(value) => setLocation(value)}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});
