import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { dateToWeekdays, decimalFormat } from '../utils/Helpers';
import { commonStyles } from './CommonStyles';

function Forecast({ forecastData }) {
    const { font16, rowBetween, fullWidth, cardPadding, mt20, border } =
        commonStyles;
    return (
        <View style={[fullWidth, border, cardPadding, mt20, ,]}>
            {forecastData.map((data) => (
                <View
                    key={data.dt}
                    style={[rowBetween, { alignItems: 'center' }]}
                >
                    <Text style={font16}>{dateToWeekdays(data.dt)}</Text>
                    <Image
                        source={{
                            uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
                        }}
                        style={styles.image}
                    />
                    <View style={[rowBetween, { width: '50%' }]}>
                        <Text style={[font16, { marginRight: 10 }]}>
                            H: {decimalFormat(data.temp.max, 2)}°
                        </Text>
                        <Text style={font16}>
                            L: {decimalFormat(data.temp.min, 2)}°
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
});

export default Forecast;
