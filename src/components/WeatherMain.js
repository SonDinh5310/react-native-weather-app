import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from './CommonStyles';

function WeatherMain({ data }) {
    const { main, weather } = data;
    const { font40, font60, font16, font20, rowBetween } = commonStyles;
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={[font40]}>{data.name}</Text>
            <Text style={[font60, { marginTop: -15 }]}>{main.temp}°</Text>
            <Text style={[font20, { textTransform: 'capitalize' }]}>
                {weather[0].description}
            </Text>
            <View style={rowBetween}>
                <Text style={[font16, { marginRight: 10 }]}>
                    H: {main.temp_max}°
                </Text>
                <Text style={font16}>L: {main.temp_min}°</Text>
            </View>
        </View>
    );
}

export default WeatherMain;
