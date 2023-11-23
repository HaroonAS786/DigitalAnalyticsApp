import { Dimensions, StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'

export const getStyles = () => StyleSheet.create({
    loginSuccessContainer: {
        paddingHorizontal: 16,
        marginHorizontal: 30,
        backgroundColor: "white",
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
    continueBtn: {
        borderRadius: 8,
        height: 44
    },
  
})