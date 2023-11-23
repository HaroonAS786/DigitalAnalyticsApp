import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import store from "./redux/store";
import OnBoardScreen from "./screens/auth/onboard";
import LoginScreen from "./screens/auth/login";
import LoginSuccess from "./screens/auth/loginSuccess";
import RegisterScreen from "./screens/auth/register";
import ResetPasswordScreen from "./screens/auth/resetPassword";
import OtpScreen from "./screens/auth/otp";
import HomeScreen from "./screens/main/home";
import FileSubmitScreen from "./screens/main/submit";
import ProfileScreen from "./screens/main/profile";
import Notifications from "./screens/main/notifications";
import DashBoardScreen from "./screens/main/dashBoard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./components/CustomTabBar";
import AppDrawer from "./components/AppDrawer";
import { LogBox, Text, View } from "react-native";
import DownloadScreen from "./screens/main/downloads";
import CommentsScreen from "./screens/main/comments";
import FileSubmissionScreen from "./screens/main/submit/components/FileSubmission";
import AddDashboardScreen from "./screens/main/dashBoard/components/AddDashboard";
import ForgotPasswordScreen from "./screens/auth/forgotPassword";
import { FlashMessage } from "./components/FlashNotify";

const Stack = createStackNavigator();
const ScreenOptions = { headerShown: false };
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
LogBox.ignoreAllLogs()

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="AuthStack">
            <Stack.Screen name={'AuthStack'} component={AuthStack} />
            <Stack.Screen name={'MainStack'} component={MainStack} />
        </Stack.Navigator>
    )
}
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} initialRouteName="OnBoardScreen">
            <Stack.Screen name={"OnBoardScreen"} component={OnBoardScreen} />
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
            <Stack.Screen name={"LoginSuccess"} component={LoginSuccess} />
            <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} />
            <Stack.Screen name={"ResetPasswordScreen"} component={ResetPasswordScreen} />
            <Stack.Screen name={"ForgotPasswordScreen"} component={ForgotPasswordScreen} />
            <Stack.Screen name={"OtpScreen"} component={OtpScreen} />
        </Stack.Navigator>
    )
}

const MainTabs = () => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={ScreenOptions}>
            <Tab.Screen
                name={"DashBoardScreen"}
                component={DashBoardScreen} />
            <Tab.Screen
                name={"FileSubmitScreen"}
                component={FileSubmitScreen} />
            <Tab.Screen
                name={"HomeScreen"}
                component={HomeScreen} />
            <Tab.Screen
                name={"Notifications"}
                component={Notifications} />
            <Tab.Screen
                name={"ProfileScreen"}
                component={ProfileScreen} />
        </Tab.Navigator>
    );
}


const AppDrawerStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: false,
                drawerStyle: {
                    backgroundColor: 'transparent',
                    width: '62%',
                },
            }}
            drawerContent={props => <AppDrawer {...props} />}>
            <Drawer.Screen name='MainTabs' component={MainTabs} />
            <Drawer.Screen name={"HomeScreen"} component={HomeScreen} />
            <Drawer.Screen name={"DashBoardScreen"} component={DashBoardScreen} />
            <Drawer.Screen name={"FileSubmitScreen"} component={FileSubmitScreen} />
            <Drawer.Screen name={"Notifications"} component={Notifications} />
            <Drawer.Screen name={"CommentsScreen"} component={CommentsScreen} />
            <Drawer.Screen name={"DownloadScreen"} component={DownloadScreen} />
            <Drawer.Screen name={"ProfileScreen"} component={ProfileScreen} />
            <Drawer.Screen name={"FileSubmissionScreen"} component={FileSubmissionScreen} />
            <Drawer.Screen name={"AddDashboardScreen"} component={AddDashboardScreen} />
        </Drawer.Navigator>
    )
}

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={ScreenOptions}>
            <Stack.Screen name={"AppDrawerStack"} component={AppDrawerStack} />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
            <FlashMessage />
        </Provider>
    )
}

export default Main