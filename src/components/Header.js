import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGES } from '../assets/images'
import { themeColors } from '../config/colors'
import CustomText from './CustomText'

const Header = ({ menuClick, profileClick }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={menuClick} activeOpacity={0.6}>
                <Image style={styles.img} source={IMAGES.menuIcon} />
            </TouchableOpacity>
            <CustomText h3 titiliumSemiBold>
                Digital Analytics
            </CustomText>
            <TouchableOpacity onPress={profileClick} activeOpacity={0.6}>
                <Image style={styles.profileImg} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRygGnARKSaw09hN91f4-KivcXxsCk6sIKOhZcP8&s" }} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: themeColors.primary,
        paddingVertical: 8
    },
    img: {
        width: 25,
        height: 25
    },
    profileImg: {
        width: 30,
        height: 30,
        borderRadius: 100
    }
})