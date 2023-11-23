import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { themeColors } from '../config/colors';
import CustomText from './CustomText';
import Spacer from './Spacer';

const CustomCheckboxGroup = ({ options, selectedOptions, onSelect }) => {
    const handleOptionToggle = (option) => {
        const updatedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter((item) => item !== option)
            : [...selectedOptions, option];
        onSelect(updatedOptions);
    };

    return (
        <View style={styles.checkboxItem}>
            {options.map((option, index) => (
                <>
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleOptionToggle(option)}
                    >
                        <View style={styles.checkbox}>
                            {selectedOptions.includes(option) && <View style={styles.checked} />}
                        </View>
                    </TouchableOpacity>
                    <Spacer width={6}/>
                    <CustomText color='gray' body2 titilium style={{paddingRight:4}}>{option}</CustomText>
                </>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    checkboxItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 16,

    },
    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: themeColors.primary,
        width: 12,
        height: 12,
        borderRadius: 5,
    },
    label: {
        marginLeft: 10,
        fontSize: 16,
    },
});

export default CustomCheckboxGroup;
