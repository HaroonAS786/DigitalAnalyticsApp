import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import CustomText from './CustomText'
import { themeColors } from '../config/colors'
import Spacer from './Spacer'
import { IMAGES } from '../assets/images'

const AppDrawer = ({ state, navigation }) => {

    const getIcon = (name) => {
        switch (name) {
            case "MainTabs": return IMAGES.dashBoardIcon
            case "FileSubmitScreen": return IMAGES.fileIcon
            case "HomeScreen": return IMAGES.homeIcon
            case "Notifications": return IMAGES.notificationIcon
            case "ProfileScreen": return IMAGES.profileIcon
            case "DownloadScreen": return IMAGES.downloadIcon
            case "CommentsScreen": return IMAGES.commentsIcon
        }
    }
    const getName = (name) => {
        switch (name) {
            case "MainTabs": return "Dashboard"
            case "FileSubmitScreen": return "Submit Data"
            case "HomeScreen": return "Home"
            case "Notifications": return "Notification"
            case "ProfileScreen": return "My Profile"
            case "DownloadScreen": return "Downloads"
            case "CommentsScreen": return "Comments"
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
            <TouchableOpacity
                onPress={onPress}
                key={index}
                style={styles.wrap}
                activeOpacity={0.6}
            >
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={getIcon(route.name)} style={{ width: 24, height: 24 }} />
                </View>
                <Spacer width={12} />
                <CustomText h6 color={'white'} titiliumSemiBold>{getName(route.name)}</CustomText>
            </TouchableOpacity>
        );
    }, [state])

    return (
        <View style={styles.mainContainer}>
            <Spacer height={60} />
            {
                state.routes.map((route, index) => index !== 2 && renderTab(route, index))
            }
        </View>
    )
}
export default AppDrawer

const styles = StyleSheet.create({
    mainContainer: {
        padding: 14,
        flex: 1,
        borderRadius: 50,
        margin: 16,
        backgroundColor: themeColors.primary,
    },
    wrap: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20
    },

})