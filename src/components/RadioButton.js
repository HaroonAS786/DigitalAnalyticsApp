import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { themeColors } from '../config/colors';

const CustomRadioButton = ({ options, onSelect, selectedValue }) => {
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <>
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.radioButton,
                            selectedValue === option.value && styles.selected,
                        ]}
                        onPress={() => onSelect(option.value)}
                    >
                    </TouchableOpacity>
                    <Spacer width={6} />
                    <Text style={styles.label}>{option.label}</Text>
                    <Spacer width={6} />
                </>

            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 12,


    },
    radioButton: {
        borderWidth: 1,
        width: 14,
        height: 14,
        borderColor: 'gray',
        borderRadius: 100,
        // padding: 10,
        // marginRight: 10,
    },
    view: {
        backgroundColor: "red",
        // marginRight: 6
    },
    selected: {
        backgroundColor: themeColors.primary, // Customize the selected button's style
    },
    label: {
        color: 'black',
    },
});

export default CustomRadioButton;
