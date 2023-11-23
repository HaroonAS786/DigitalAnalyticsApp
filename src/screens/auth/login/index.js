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
import PasswordIcon from '../../../assets/svgs/PasswordIcon'
import { PasswordHideIcon } from '../../../assets/svgs'
import FlashNotification from '../../../components/FlashNotify'

const LoginScreen = (props) => {

    const [loading, setLoading] = useState(false);
    const [isSocialLogin, setIsSocialLogin] = useState(false)
    const [socialLoginText, setSocialLoginText] = useState("")
    const [togglePass, setTogglePass] = useState(false)
    const styles = getStyles()
    const [data, setData] = useState({
        email: {
            value: "",
            errors: [],
        },
        password: {
            value: "",
            errors: [],
        },
    });

    const isValidated =
        data?.email?.value?.length &&
        data?.password?.value?.length

    const handleForgotPassword = () => {
        return props.navigation.navigate("ForgotPasswordScreen")
    }
    const handleCreateAccount = () => {
        return props.navigation.navigate("RegisterScreen")

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
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            FlashNotification.show("Login Successfully", 'success')
            return props.navigation.navigate("LoginSuccess")
        }, 2000)
    }
    const handleInput = (t, tag) => {
        setData((prevState) => {
            const valueToSet = { value: "" };
            if (tag === "email") {
                valueToSet.value = t;
                if (t.match(/.@.*\.../)) {
                    valueToSet.value = t;

                } else {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Enter Valid Email",
                    ];
                }
            }

            if (tag === "password") {
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
            return {
                ...prevState,
                [tag]: valueToSet,
            };
        });
    };

    return (
        <ImageBackground style={styles.bgImage} source={IMAGES.onBoardBgImage}>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Spacer height={20} />
                    <CustomText h4 color={themeColors.black} style={styles.loginLabel} titiliumBold>LOGIN</CustomText>
                    <Spacer height={20} />
                    <CustomTextInput
                        placeholder={"Email"}
                        onChangeText={(t) => handleInput(t, "email")}
                        errors={data.email.errors}
                        success={data.email.success} />
                    <CustomTextInput
                        placeholder={"Password"}
                        onChangeText={(t) => handleInput(t, "password")}
                        leftIconPress={() => { setTogglePass(!togglePass) }}
                        leftIcon={togglePass ? <PasswordHideIcon /> : <PasswordIcon />}
                        password={!togglePass}
                        errors={data.password.errors}
                        success={data.password.success} />
                    <Spacer height={14} />
                    <Button
                        loading={loading}
                        disabled={!isValidated}
                        label={"Login"}
                        buttonContainerStyle={styles.loginBtn}
                        onPress={handleLogin} />
                    <Spacer height={2} />
                    <View style={styles.footerContext}>
                        <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.6}>
                            <CustomText color={themeColors.black} body2 titiliumSemiBold>Forgot Password?</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCreateAccount} activeOpacity={0.6}>
                            <CustomText color={themeColors.black} body2 titiliumSemiBold>Create Account</CustomText>
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

export default LoginScreen