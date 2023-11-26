import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { themeColors } from '../config/colors';
import Spacer from './Spacer';
import TimeComponent from './Timer';
import CustomText from './CustomText';
import FlashNotification from './FlashNotify';

const ConfirmationCodeInput = ({ codeLength, onChangeText }) => {
	const [code, setCode] = useState(Array(codeLength).fill(''));
	const inputRefs = Array(codeLength).fill().map(() => useRef(null));
	const [otpResend, setOtpResend] = useState(60);
	const [onOtpResend, setOnOtpResend] = useState(false);

	useEffect(() => {
		if (onOtpResend && otpResend === 0) {
			setCode(Array(codeLength).fill(''));
			inputRefs.forEach(ref => ref.current.clear());
		}
	}, [onOtpResend]);

	useEffect(() => {
		let interval;
		if (otpResend > 0) {
			interval = setInterval(() => {
				setOtpResend((prevResend) => prevResend - 1);
			}, 1000);
		}
		return () => {
			clearInterval(interval);
		};
	}, [otpResend]);

	const handleTextChange = (text, index) => {
		const newCode = [...code];
		newCode[index] = text;
		setCode(newCode);
		onChangeText(newCode.join(''));
		if (text.length === 1 && index < codeLength - 1) {
			inputRefs[index + 1].current.focus();
		}
	};

	const handleResend = () => {
		Keyboard.dismiss()
		setOtpResend(60);
		setCode(Array(codeLength).fill(''));
		inputRefs.forEach(ref => ref.current.clear());
		FlashNotification.show("OTP SENT", "success");
	};
	return (
		<>
			<View style={styles.container}>
				{code.map((char, index) => (
					<TextInput
						key={index}
						ref={inputRefs[index]}
						style={styles.input}
						value={char}
						maxLength={1}
						onChangeText={text => handleTextChange(text, index)}
						keyboardType="numeric"
					/>
				))}
			</View>
			<Spacer height={20} />
			<View style={styles.countTimer}>
				{otpResend ? <TimeComponent durationInSeconds={otpResend} /> :
					<TouchableOpacity activeOpacity={0.6} onPress={handleResend}>
						<CustomText body titiliumSemiBold color={themeColors.primary}>
							Resend
						</CustomText>
					</TouchableOpacity>}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 12,
	},
	input: {
		width: 50,
		textAlign: 'center',
		fontSize: 28,
		paddingBottom: 15,
		borderRadius: 10,
		borderColor: 'grey',
		borderWidth: 0.5,
		fontFamily: 'PlusJakartaText-Bold',
		color: '#49566E',
		backgroundColor: themeColors.white,
	},

	countTimer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ConfirmationCodeInput;
