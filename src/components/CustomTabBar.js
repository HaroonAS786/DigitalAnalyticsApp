import React, { useCallback } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { themeColors } from "../config/colors";


import CustomText from "./CustomText";
import { IMAGES } from "../assets/images";
import Spacer from "./Spacer";

const CustomTabBar = ({ state, descriptors, navigation }) => {

	const getIcon = (name) => {
		switch (name) {
			case "DashBoardScreen": return IMAGES.dashBoardIcon
			case "FileSubmitScreen": return IMAGES.fileIcon
			case "HomeScreen": return IMAGES.homeIcon
			case "Notifications": return IMAGES.notificationIcon
			case "ProfileScreen": return IMAGES.profileIcon
		}
	}
	const getName = (name) => {
		switch (name) {
			case "DashBoardScreen": return "Dashboard"
			case "FileSubmitScreen": return "Submit Data"
			case "HomeScreen": return "Home"
			case "Notifications": return "Notifications"
			case "ProfileScreen": return "My Profile"
		}
	}

	const renderTab = useCallback((route, index) => {

		const isFocused = state.index === index;

		const onPress = () => {
			const event = navigation.emit({
				type: 'tabPress',
				target: route.key,
			});

			if (!isFocused && !event.defaultPrevented) {
				navigation.navigate(route.name);
			}
		};

		return (
			<View
				key={index}
				style={[
					styles.button,
				]}>
				<Pressable style={{ justifyContent: "center", alignItems: "center" }} onPress={onPress}>
					<Image  tintColor={isFocused? 'white':'#d3d3d3'} source={getIcon(route.name)} style={{ width: 24, height: 24 }} />
				</Pressable>
				<Spacer height={8}/>
				<CustomText body2 color={isFocused? 'white':'#d3d3d3'} titiliumSemiBold>{getName(route.name)}</CustomText>
			</View>
		);
	}, [state])

	return (
		<View style={styles.mainContainer}>
			{
				state.routes.map((route, index) => renderTab(route, index))
			}
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		backgroundColor: themeColors.primary,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		padding: 14

	},
	button: {
		flex: 1,
		backgroundColor: themeColors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
	},

})

export default CustomTabBar;