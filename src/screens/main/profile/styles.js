import { Dimensions, StyleSheet } from 'react-native'
import { themeColors } from '../../../config/colors'

export const getStyles = () => StyleSheet.create({
    container: {
        flex: 1,

    },
    profileContainer: {
        backgroundColor: themeColors.white,
        borderRadius: 8,
        marginHorizontal: 25,
        marginTop: 80,
        paddingHorizontal: 16

    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        position: 'absolute',
        alignSelf: "center",
        justifyContent: "center",
        top: -40
    },
    Img: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    updateBtn: {
        borderRadius: 4,
        height: 33,
        padding: 0
    },
    camera: {
        width: 34,
        height: 34,
        borderRadius: 100,
        position: 'absolute',
        right: 0,
        bottom: 5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: "lightgrey"
    },
    mediaOptionCon: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 16,
        height: Dimensions.get('window').height
    },
    mediaOptionStyle: {
        flexDirection: "row",
        alignItems: "center"
    }
})