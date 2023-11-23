import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { themeColors } from "../config/colors";
import CustomText from "./CustomText";

const FlashNotification = {
    show: (message, type = 'default', long = false) => {
        global.flashMessageRef(message, type, long);
    }
}

const FlashMessage = ({ }) => {
    const animValue = useSharedValue(0);
    const animStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: interpolate(animValue.value, [0, 1], [-100, 20]) }],
            opacity: interpolate(animValue.value, [0, 1], [0, 1]),
        }
    });

    const [text, setText] = useState("");
    const [messageType, setMessageType] = useState("default");

    const show = (message, type, long) => {
        setText(message);
        setMessageType(type);
        animValue.value = withTiming(1, { duration: 500 });
        setTimeout(() => {
            animValue.value = withTiming(0, { duration: 500 });
            setTimeout(() => {
                setText("");
                setMessageType("default");
            }, 1000);
        }, long ? 4000 : 2000);
    }

    useEffect(() => {
        global.flashMessageRef = show
    }, [])

    return !!text && (
        <Animated.View style={[styles.container, { backgroundColor: getBackgroundColor(messageType) }, animStyle]}>
            <CustomText titiliumSemiBold>{text}</CustomText>
        </Animated.View>
    );
}

const getBackgroundColor = (type) => {
    switch (type) {
        case 'success':
            return "#008000";
        case 'error':
            return "red";
        // Add more cases for different message types
        default:
            return themeColors.gr;
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        padding: 20,
        left: 10,
        right: 10,
        borderRadius: 10,
    }
});

export {
    FlashMessage
}

export default FlashNotification;
