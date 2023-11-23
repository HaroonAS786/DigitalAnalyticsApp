import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ArrowDown } from '../assets/svgs';
import CustomText from './CustomText';

const CustomDropdown = ({ options, onSelect, selectedOption }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleSelectOption = (option) => {
        onSelect(option);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setDropdownVisible(!isDropdownVisible)}
            >
                <CustomText body color='gray' titilium>
                    {selectedOption || 'Select an option'}
                </CustomText>
                <ArrowDown />
            </TouchableOpacity>
            {isDropdownVisible && (
                <View style={[styles.dropdownContent]}>
                    {options.map((val, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleSelectOption(val)}
                                style={styles.dropdownOption}>
                                <CustomText body titilium color='black' >{val}</CustomText>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    dropdownButton: {
        backgroundColor: "#f6f6f6",
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    selectedOptionText: {
        color: 'black',
    },
    dropdownList: {
        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 1,
        width: '100%',
        backgroundColor: "white"
    },

    dropdownContent: {
        position: 'absolute',
        top: 40,
        width: '100%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderWidth: 0.2,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 4,
    },
    dropdownOption: {
        padding: 10,
      },
});

export default CustomDropdown;
