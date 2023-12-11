import React, { useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { themeColors } from "../config/colors";
import CustomText from "./CustomText";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { ErrorIcon, SuccessIcon } from "../assets/svgs";
import { TouchableOpacity } from "react-native-gesture-handler";


const CustomTextInput = ({
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
	keyboardType,
	rightIcon,
	rightIconPress
}) => {

	const RenderMsg = useCallback(({ msg, isError }) => {
		return (
			<Animated.View style={styles.msgBox}
			// entering={FadeInDown} exiting={FadeOutDown}
			>
				{isError ? <ErrorIcon /> : <SuccessIcon />}
				<CustomText style={{ marginLeft: 4 }} color={themeColors.black}>{msg}</CustomText>
			</Animated.View>
		)
	}, [errors, success])

	return (
		<View>
			<View style={styles.main}>
				{label && <CustomText body titilium>{label}</CustomText>}
				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
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
					<TouchableOpacity onPress={rightIconPress} activeOpacity={0.6}>
						{rightIcon}
					</TouchableOpacity>
				</View>
			</View >
			{errors.map(msg => <RenderMsg key={msg} msg={msg} isError />)}
			{success.map(msg => <RenderMsg key={msg} msg={msg} />)}
		</View>



	)
}

const styles = StyleSheet.create({
	main: {
		marginVertical: 8,
		backgroundColor: themeColors.white,
		paddingHorizontal: 6,
		borderRadius: 10,
		borderColor: 'grey',
		borderWidth: 0.5
	},

	container: {
		justifyContent: "center",
		alignItems: "center",
		color: themeColors.black,
		fontFamily: 'TitiliumWeb-Regular',
		width: '60%'
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

export default CustomTextInput;