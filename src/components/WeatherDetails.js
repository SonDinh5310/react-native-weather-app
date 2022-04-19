import React from "react";
import { View } from "react-native";
import CustomInfo from "./CustomInfo";
import { faWind, faDroplet, faGauge } from "@fortawesome/free-solid-svg-icons";

function WeatherDetails() {
    return (
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
    );
}

export default WeatherDetails;
