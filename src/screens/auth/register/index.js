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
import { ScrollView } from 'react-native-gesture-handler'
import PopupDialog from '../../../components/Popup'
import { PasswordHideIcon, PasswordIcon } from '../../../assets/svgs'
import FlashNotification from '../../../components/FlashNotify'

const RegisterScreen = (props) => {

    const [loading, setLoading] = useState(false);
    const [isSocialLogin, setIsSocialLogin] = useState(false)
    const [socialLoginText, setSocialLoginText] = useState("")
    const [togglePass, setTogglePass] = useState(false)
    const [confirmTogglePass, setConfirmTogglePass] = useState(false)
    const styles = getStyles()
    const [data, setData] = useState({
        fName: {
            value: "",
            errors: [],
        },
        lName: {
            value: "",
            errors: [],
        },
        phoneNo: {
            value: "",
            errors: [],
        },
        email: {
            value: "",
            errors: [],
        },
        password: {
            value: "",
            errors: [],
        },
        confirmPassword: {
            value: "",
            errors: [],
        },
    });

    const isValidated =
        data?.fName?.value?.length &&
        data?.lName?.value?.length &&
        data?.phoneNo?.value?.length &&
        data?.email?.value?.length &&
        data?.password?.value?.length &&
        data?.confirmPassword?.value?.length

    const handleForgotPassword = () => {
        return props.navigation.navigate("ForgotPasswordScreen")

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
    const handleRegister = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            FlashNotification.show("Account Created", 'success')
            return props.navigation.navigate("LoginSuccess")
        }, 2000)
    }
    const handleInput = (t, tag) => {
        setData((prevState) => {
            const valueToSet = { value: "" };
            if (tag === "fName") {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;

                } else {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "FirstName Required",
                    ];
                }
            }
            if (tag === "lName") {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;

                } else {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "LastName Required",
                    ];
                }
            }
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
            if (tag === "pNo") {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;

                } else {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Phone Number Required",
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
            if (tag === "confirmPassword") {
                valueToSet.value = t;
                if (t.length < 8) {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Pasword must be at least 8 characters long",
                    ];
                }
                else if (data.password.value === data.confirmPassword.value) {
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
                <ScrollView>
                    <Spacer height={100} />
                    <View style={styles.registerContainer}>
                        <Spacer height={20} />
                        <CustomText h4 color={themeColors.black} style={styles.registerLabel} titiliumBold>CREATE</CustomText>
                        <Spacer height={20} />
                        <CustomTextInput
                            placeholder={"Firstname"}
                            onChangeText={(t) => handleInput(t, "fName")}
                            errors={data.fName.errors}
                            success={data.fName.success} />
                        <CustomTextInput
                            placeholder={"Lastname"}
                            onChangeText={(t) => handleInput(t, "lName")}
                            errors={data.lName.errors}
                            success={data.lName.success} />
                        <CustomTextInput
                            placeholder={"Email"}
                            onChangeText={(t) => handleInput(t, "email")}
                            keyboardType={'email-address'}
                            errors={data.email.errors}
                            success={data.email.success} />
                        <CustomTextInput
                            placeholder={"Phone No"}
                            onChangeText={(t) => handleInput(t, "phoneNo")}
                            keyboardType={'number-pad'}
                            errors={data.phoneNo.errors}
                            success={data.phoneNo.success} />
                        <CustomTextInput
                            placeholder={"Password"}
                            onChangeText={(t) => handleInput(t, "password")}
                            errors={data.password.errors}
                            success={data.password.success}
                            rightIconPress={() => { setTogglePass(!togglePass) }}
                            rightIcon={togglePass ? <PasswordHideIcon /> : <PasswordIcon />}
                            password={!togglePass}
                        />
                        <CustomTextInput
                            placeholder={"Confirm Password"}
                            onChangeText={(t) => handleInput(t, "confirmPassword")}
                            rightIconPress={() => { setConfirmTogglePass(!confirmTogglePass) }}
                            rightIcon={confirmTogglePass ? <PasswordHideIcon /> : <PasswordIcon />}
                            password={!togglePass}
                            errors={data.confirmPassword.errors}
                            success={data.confirmPassword.success} />
                        <Spacer height={14} />
                        <Button disabled={!isValidated} loading={loading} label={"Create"} buttonContainerStyle={styles.registerBtn} onPress={handleRegister} />
                        <Spacer height={2} />
                        <View style={styles.footerContext}>
                            <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.6}>
                                <CustomText color={themeColors.black} body2 titiliumSemiBold>Forgot Password?</CustomText>
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
                </ScrollView>
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

export default RegisterScreen

