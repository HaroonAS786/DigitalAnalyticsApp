import { Dimensions, StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'

export const getStyles = () => StyleSheet.create({
    otpContainer: {
        paddingHorizontal: 16,
        marginHorizontal: 30,
        backgroundColor: "rgba(255,255,255,0.66)",
        marginBottom: 40,
        borderRadius: 25,
        paddingBottom: 40
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bgImage: {
        flex: 1,
    },
    otpLabel: {
        textAlign: 'center'
    },
    otpBtn: {
        borderRadius: 8,
        height: 44
    },
    countTimer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})