import { StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'

export const getStyles = () => StyleSheet.create({
    container: {
        flex: 1,
    },
    notifyCon: {
        backgroundColor: themeColors.white,
        marginHorizontal: 16,
        borderRadius: 6,
        paddingBottom: 16,
    },
    seperatorView: {
        width: "100%",
        backgroundColor: "lightgrey",
        height: 1,
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 16
    },
    pageArrow: {
        fontSize: 20,
        margin: 10,
        color: 'blue',
    },
    pageNumber: {
        fontSize: 20,
    },

    arrowBox: {
        backgroundColor: 'white',
        borderWidth:.5,
        width: 24,
        height: 24,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent:"center"
    }
})