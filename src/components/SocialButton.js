import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import Spacer from './Spacer'
import { themeColors } from '../config/colors'

const SocialButton = ({ label, containerStyles, svg, onClick }) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyles]} onPress={onClick} activeOpacity={0.6}>
            <Image source={svg} style={styles.img} resizeMode='contain' />
            <Spacer width={4} />
            <CustomText body2 titiliumSemiBold color='white' h5>{label}</CustomText>
        </TouchableOpacity>
    )
}

export default SocialButton


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly',
        flex: 1,
        height: 33,
        padding: 6,
        borderTopWidth: 4,
        borderColor: themeColors.white
    },
    img: {
        width: 24,
        height: 24
    }
})