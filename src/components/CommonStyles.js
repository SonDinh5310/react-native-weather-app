import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    card: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
    },
    cardPadding: {
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    border: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    font16: {
        fontSize: 16,
    },
    font20: {
        fontSize: 20,
    },
    font40: {
        fontSize: 40,
    },
    font60: {
        fontSize: 60,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mt20: {
        marginTop: 20,
    },
    fullWidth: {
        width: '100%',
    },
});
