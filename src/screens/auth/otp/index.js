import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';

import { IMAGES } from '../../../assets/images';
import Button from '../../../components/Button';
import ConfirmationCodeInput from '../../../components/CodeConfirmationPin';
import CustomText from '../../../components/CustomText';
import Spacer from '../../../components/Spacer';
import TimeComponent from '../../../components/Timer';
import { themeColors } from '../../../config/colors';
import { getStyles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FlashNotification from '../../../components/FlashNotify';


const OtpScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [otpLength, setOtpLength] = useState('');
    const styles = getStyles();
 

    const handleOtp = (t, tag) => {
        setLoading(true);
        setTimeout(() => {
            props.navigation.navigate('ResetPasswordScreen');
            setLoading(false);
        }, 2000);
    };

    const isValidated = otpLength.length > 0;

    return (
        <ImageBackground style={styles.bgImage} source={IMAGES.onBoardBgImage}>
            <View style={styles.container}>
                <View style={styles.otpContainer}>
                    <Spacer height={20} />
                    <CustomText h4 color={themeColors.black} style={styles.otpLabel} titiliumBold>
                        CONFIRM OTP
                    </CustomText>
                    <Spacer height={20} />
                    <ConfirmationCodeInput codeLength={4} onChangeText={(v) => setOtpLength(v)} />
                    <Spacer height={20} />
                    <Button loading={loading} disabled={!isValidated} label={'Confirm'} buttonContainerStyle={styles.resetBtn} onPress={handleOtp} />
                </View>
            </View>
        </ImageBackground>
    );
};

export default OtpScreen;




