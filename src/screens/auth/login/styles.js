import { Dimensions, StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'

export const getStyles = () => StyleSheet.create({
    loginContainer: {
        paddingHorizontal: 16,
        marginHorizontal: 30,
        backgroundColor: "rgba(255,255,255,0.66)",
        marginBottom: 40,
        borderRadius: 25,
        paddingBottom:40
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bgImage: {
        flex: 1,
    },
    loginLabel: {
        textAlign: 'center'
    },
    loginBtn: {
        borderRadius: 8,
        height: 44
    },
    footerContext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 2
    },
    fbStyle: {
        backgroundColor: '#4267B2',
    },
    googleStyle:{
        backgroundColor: '#DB4437',
    },
    socialContainer: {
        flexDirection: 'row',
        alignItems: "center",
    }
})