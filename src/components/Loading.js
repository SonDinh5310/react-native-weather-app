import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { commonStyles } from './CommonStyles';
function Loading() {
    return (
        <View style={commonStyles.mt20}>
            <ActivityIndicator size="large" color="black" />
        </View>
    );
}

export default Loading;
