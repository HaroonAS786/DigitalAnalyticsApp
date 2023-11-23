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

const ForgotPasswordScreen = (props) => {

    const [loading, setLoading] = useState(false);
    const [isSocialLogin, setIsSocialLogin] = useState(false)
    const [socialLoginText, setSocialLoginText] = useState("")
    const styles = getStyles()
    const [data, setData] = useState({
        email: {
            value: "",
            errors: [],
        },
    });

    const isValidated =
        data?.email?.value?.length

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
    const handleForgot = () => {
        setLoading(true)
        setTimeout(() => {
            props.navigation.navigate("OtpScreen")
            setLoading(false)
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
                    <CustomText h4 color={themeColors.black} style={styles.resetLabel} titiliumBold>FORGOT PASSWORD</CustomText>
                    <Spacer height={20} />
                    <CustomTextInput
                        placeholder={"Email"}
                        onChangeText={(t) => handleInput(t, "email")}
                        errors={data.email.errors}
                        success={data.email.success} />
                    <Spacer height={14} />
                    <Button disabled={!isValidated} loading={loading} label={"Send"} buttonContainerStyle={styles.resetBtn} onPress={handleForgot} />
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

export default ForgotPasswordScreen


