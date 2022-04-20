import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { commonStyles } from './CommonStyles';

function CustomInfo({ icon, infoTitle, infoData, unit }) {
    const { rowBetween, font16 } = commonStyles;
    return (
        <View>
            <View style={rowBetween}>
                <FontAwesomeIcon icon={icon} />
                <Text style={{ marginLeft: 5 }}>{infoTitle}:</Text>
            </View>
            <Text style={font16}>
                {infoData} {unit}
            </Text>
        </View>
    );
}

export default CustomInfo;
