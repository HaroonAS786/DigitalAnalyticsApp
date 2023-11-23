import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { themeColors } from '../config/colors';

const ConfirmationCodeInput = ({ codeLength ,onChangeText}) => {
	const [code, setCode] = useState(Array(codeLength).fill(''));
	const inputRefs = Array(codeLength)
		.fill()
		.map((_, index) => useRef(null));

	const handleTextChange = (text, index) => {
		onChangeText(text)
		if (text.length <= 1) {
			const newCode = [...code];
			newCode[index] = text;
			setCode(newCode);

			if (text.length === 1 && index < codeLength - 1) {
				inputRefs[index + 1].current.focus();
			}
		}
	};

	return (
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
		borderWidth: .5,
		fontFamily: 'PlusJakartaText-Bold',
		color: '#49566E',
		backgroundColor: themeColors.white
	},
});

export default ConfirmationCodeInput;
