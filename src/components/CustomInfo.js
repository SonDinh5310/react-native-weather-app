import React from "react";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function CustomInfo({ icon, infoTitle, infoData, unit }) {
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <FontAwesomeIcon icon={icon} />
                <Text style={{ marginLeft: 5 }}>{infoTitle}:</Text>
            </View>
            <Text style={{ fontSize: 16 }}>
                {infoData} {unit}
            </Text>
        </View>
    );
}

export default CustomInfo;
