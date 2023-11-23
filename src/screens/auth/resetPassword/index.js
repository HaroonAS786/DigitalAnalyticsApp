import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, ImageBackground, TouchableOpacity, View } from 'react-native'
import { IMAGES } from '../../../assets/images'
import Button from '../../../components/Button'
import CustomText from '../../../components/CustomText'
import CustomTextInput from '../../../components/CustomTextInput'
import SocialButton from '../../../components/SocialButton'
import Spacer from '../../../components/Spacer'
import { themeColors } from '../../../config/colors'
import { getStyles } from './styles'
import PopupDialog from '../../../components/Popup'
import { PasswordHideIcon, PasswordIcon } from '../../../assets/svgs'
import FlashNotification from '../../../components/FlashNotify'

const ResetPasswordScreen = (props) => {

    const [loading, setLoading] = useState(false);
    const [isSocialLogin, setIsSocialLogin] = useState(false)
    const [socialLoginText, setSocialLoginText] = useState("")
    const [togglePass, setTogglePass] = useState(false)
    const [confirmTogglePass, setConfirmTogglePass] = useState(false)
    const styles = getStyles()
    const [data, setData] = useState({
        newPassword: {
            value: "",
            errors: [],
        },
        confirmPassword: {
            value: "",
            errors: [],
        },
    });

    const isValidated =
        data?.newPassword?.value?.length && data.confirmPassword.value.length

    const handleCreateAccount = () => {
        return props.navigation.navigate("RegisterScreen")
    }
    const handleLogin = () => {
        return props.navigation.navigate("LoginScreen")
    }
    const handleFaceBook = () => {
        setSocialLoginText("facebook")
        setIsSocialLogin(true)
        setTimeout(() => {
            setIsSocialLogin(false)
            return props.navigation.navigate("LoginSuccess")
        }, 2000)
    }
    const handleGoogle = () => {
        setSocialLoginText("google")
        setIsSocialLogin(true)
        setTimeout(() => {
            setIsSocialLogin(false)
            return props.navigation.navigate("LoginSuccess")
        }, 2000)
    }
    const handleResetPassword = () => {
        setLoading(true)
        setTimeout(() => {
            FlashNotification.show("Password has been reset", 'success')
            props.navigation.navigate("LoginScreen")
            setLoading(false)
        }, 2000)
    }
    const handleInput = (t, tag) => {
        setData((prevState) => {
            const valueToSet = { value: "" };
            if (tag === "newPassword") {
                valueToSet.value = t;
                if (t.length < 8) {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Pasword must be at least 8 characters long",
                    ];
                } else {
                    valueToSet.errors = [];
                }
            } else {
                valueToSet.value = t;
            }
            if (tag === "confirmPassword") {
                valueToSet.value = t;
                if (t.length < 8) {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Pasword must be at least 8 characters long",
                    ];
                }
                else if (data.newPassword.value === data.confirmPassword.value) {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Pasword does not match",
                    ];
                } else {
                    valueToSet.errors = [];
                }
            } else {
                valueToSet.value = t;
            }
            return {
                ...prevState,
                [tag]: valueToSet,
            };
        });
    };

    return (
        <ImageBackground style={styles.bgImage} source={IMAGES.onBoardBgImage}>
            <View style={styles.container}>
                <View style={styles.resetContainer}>
                    <Spacer height={20} />
                    <CustomText h4 color={themeColors.black} style={styles.resetLabel} titiliumBold>RESET PASSWORD</CustomText>
                    <Spacer height={20} />
                    <CustomTextInput
                        placeholder={"New Password"}
                        onChangeText={(t) => handleInput(t, "newPassword")}
                        errors={data.newPassword.errors}
                        success={data.newPassword.success}
                        leftIconPress={() => { setTogglePass(!togglePass) }}
                        leftIcon={togglePass ? <PasswordHideIcon /> : <PasswordIcon />}
                        password={!togglePass}
                    />
                    <CustomTextInput
                        placeholder={"Confirm Password"}
                        onChangeText={(t) => handleInput(t, "confirmPassword")}
                        errors={data.confirmPassword.errors}
                        success={data.confirmPassword.success}
                        leftIconPress={() => { setConfirmTogglePass(!confirmTogglePass) }}
                        leftIcon={confirmTogglePass ? <PasswordHideIcon /> : <PasswordIcon />}
                        password={!confirmTogglePass}
                    />
                    <Spacer height={14} />
                    <Button disabled={!isValidated} loading={loading} label={"Reset"} buttonContainerStyle={styles.resetBtn} onPress={handleResetPassword} />
                    <Spacer height={2} />
                    <View style={styles.footerContext}>
                        <TouchableOpacity onPress={handleCreateAccount} activeOpacity={0.6}>
                            <CustomText color={themeColors.black} body2 titiliumSemiBold>Create Account</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleLogin} activeOpacity={0.6}>
                            <CustomText color={themeColors.black} body2 titiliumSemiBold>Login to Account</CustomText>
                        </TouchableOpacity>
                    </View>
                    <Spacer height={20} />
                    <View style={styles.socialContainer}>
                        <SocialButton label={"Login with Facebook"} containerStyles={styles.fbStyle} svg={IMAGES.facebookLogo} onClick={handleFaceBook} />
                        <Spacer width={6} />
                        <SocialButton label={"Sign in with Google+"} containerStyles={styles.googleStyle} svg={IMAGES.googleLogo} onClick={handleGoogle} />
                    </View>
                </View>
            </View>
            <PopupDialog isVisible={isSocialLogin}>
                <View style={{ width: Dimensions.get('window').width / 2, marginHorizontal: 16 }}>
                    <View>
                        <CustomText color='black' titiliumSemiBold h6>Logging with {socialLoginText}...</CustomText>
                    </View>
                    <Spacer height={20} />
                    <ActivityIndicator color={themeColors.primary} />
                </View>
            </PopupDialog>
        </ImageBackground>
    )
}

export default ResetPasswordScreen


