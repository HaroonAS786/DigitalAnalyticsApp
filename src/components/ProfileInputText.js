import React, { useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { themeColors } from "../config/colors";
import CustomText from "./CustomText";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { ErrorIcon, SuccessIcon } from "../assets/svgs";
import Spacer from "./Spacer";


const ProfileTextInput = ({
    label,
    placeholder,
    onChangeText,
    maxLength = 50, //by default 50 characters
    password = false,
    errors = [],
    success = [],
    value = undefined,
    onBlur,
    inputStyle,
    numberOfLines,
    multiline,
    autoCapitalize,
    inputMainCon,
    keyboardType
}) => {

    const RenderMsg = useCallback(({ msg, isError }) => {
        return (
            <Animated.View style={styles.msgBox}>
                {isError ? <ErrorIcon /> : <SuccessIcon />}
                <CustomText style={{ marginLeft: 4 }} color={themeColors.black}>{msg}</CustomText>
            </Animated.View>
        )
    }, [errors, success])

    return (
        <View>
            {label && <CustomText body color="gray" titilium>{label}</CustomText>}
            <Spacer height={8} />
            <View style={[styles.main, inputMainCon]}>
                <TextInput
                    value={value}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={themeColors.fontLight}
                    style={[styles.container, inputStyle]}
                    onChangeText={onChangeText}
                    secureTextEntry={password}
                    onBlur={onBlur}
                    multiline={multiline}
                    keyboardType={keyboardType}
                    numberOfLines={numberOfLines}
                    autoCapitalize={autoCapitalize}
                />
            </View >
            {errors.map(msg => <RenderMsg key={msg} msg={msg} isError />)}
            {success.map(msg => <RenderMsg key={msg} msg={msg} />)}
        </View>



    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#f6f6f6",
        borderRadius: 4,
    },

    container: {
        justifyContent: "center",
        alignItems: "center",
        color: themeColors.black,
        fontFamily: 'TitiliumWeb-Regular'
    },
    msgBox: {
        marginTop: 10,
        marginLeft: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginRight: 5
    }
})

export default ProfileTextInput;