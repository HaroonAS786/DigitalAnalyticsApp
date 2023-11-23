import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { themeColors } from '../config/colors';
import { IMAGES } from '../assets/images';
import Spacer from './Spacer';
// import { CheckBox } from 'react-native-elements';
const SelectTenant = ({ title, svg, onChangeValue, selected }) => {

    const handlePress = () => {
        onChangeValue(title);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handlePress}
                style={[
                    styles.checkbox,
                    selected ? styles.checked : styles.unchecked,
                ]}
            >
                {selected && <Image source={IMAGES.checkIcon} style={styles.checkImg} />}
            </TouchableOpacity>
            <Image source={svg} style={styles.imag} />
            <Spacer width={8} />
            <CustomText body titiliumBold color={themeColors.black}>{title}</CustomText>
        </View>
    );
};

export default SelectTenant;


const styles = StyleSheet.create({
    container: {
        borderColor: "grey",
        borderWidth: .5,
        borderRadius: 4,
        marginBottom: 12,
        padding: 20,
        flexDirection: 'row', alignItems: 'center'
    },
    imag: {
        width: 33,
        height: 33,

    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 100,
        marginRight: 10,
    },
    checked: {
        borderColor: themeColors.buttonPrimary,
        backgroundColor: themeColors.buttonPrimary,
        justifyContent: "center",
        alignItems: "center" // You can customize the checked color
    },
    unchecked: {
        borderColor: 'grey',
        borderWidth: .5,
        backgroundColor: 'lightgray'
    },
    checkImg: {
        width: 18,
        height: 18,
    }
})
