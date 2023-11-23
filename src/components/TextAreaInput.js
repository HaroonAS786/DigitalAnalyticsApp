import React, { useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { themeColors } from "../config/colors";
import CustomText from "./CustomText";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { ErrorIcon, SuccessIcon } from "../assets/svgs";
// import { ErrorIcon, SuccessIcon } from "../assets/svgs/components";

ErrorIcon
const CustomTextInputArea = ({
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
    inputMainCon
}) => {

    const RenderMsg = useCallback(({ msg, isError }) => {
        return (
            <Animated.View style={styles.msgBox} >
                {isError ? <ErrorIcon /> : <SuccessIcon />}
                <CustomText style={{ marginLeft: 4 }}>{msg}</CustomText>
            </Animated.View>
        )
    }, [errors, success])

    return (

        <View>
            {label && <CustomText body titilium color="gray">{label}</CustomText>}
            <View style={[styles.textAreaContainer]}>
                <TextInput
                    value={value}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={themeColors.fontLight}
                    style={[styles.textArea]}
                    onChangeText={onChangeText}
                    secureTextEntry={password}
                    onBlur={onBlur}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    autoCapitalize={autoCapitalize}
                />
            </View>
            {errors.map(msg => <RenderMsg key={msg} msg={msg} isError />)}
            {success.map(msg => <RenderMsg key={msg} msg={msg} />)}

        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        marginVertical: 10
    },
    textAreaContainer: {
        padding: 5,
        height: 100,
        marginTop: 10,
        backgroundColor: "#f6f6f6",
        borderRadius: 4,
    },
    textArea: {
        justifyContent: "flex-start"
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

export default CustomTextInputArea;