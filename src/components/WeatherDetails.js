import React from 'react';
import { View } from 'react-native';
import { commonStyles } from './CommonStyles';
import { faWind, faDroplet, faGauge } from '@fortawesome/free-solid-svg-icons';
import CustomInfo from './CustomInfo';

function WeatherDetails({ data }) {
    const { rowBetween, mt20, cardPadding, border, fullWidth } = commonStyles;
    const { wind, main } = data;
    return (
        <View style={[rowBetween, mt20, cardPadding, border, fullWidth]}>
            <CustomInfo
                icon={faWind}
                infoTitle="Wind"
                infoData={wind.speed}
                unit="m/s"
            ></CustomInfo>
            <CustomInfo
                icon={faDroplet}
                infoTitle="Humidity"
                infoData={main.humidity}
                unit="%"
            ></CustomInfo>
            <CustomInfo
                icon={faGauge}
                infoTitle="Pressure"
                infoData={main.pressure}
                unit="hPa"
            ></CustomInfo>
        </View>
    );
}

export default WeatherDetails;
