import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from './CommonStyles';

function CustomError({ message }) {
    const { mt20, fullWidth, font20 } = commonStyles;
    return (
        <View style={[mt20, fullWidth, { flex: 1, alignItems: 'center' }]}>
            <Text style={font20}>{message}</Text>
        </View>
    );
}

export default CustomError;
