import { StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'

export const getStyles = () => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },
    bgImage: {
        flex: 1
    },
    footerTxt: {
        textAlign: 'center'
    },
    exploreBtn: {
        backgroundColor: themeColors.white,
        borderColor: themeColors.buttonPrimary,
        borderWidth: 2
    }
})