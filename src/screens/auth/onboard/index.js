import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { getStyles } from './styles'
import CustomText from '../../../components/CustomText'
import Button from '../../../components/Button'
import { IMAGES } from '../../../assets/images'
import Spacer from '../../../components/Spacer'
import { themeColors } from '../../../config/colors'

const OnBoardScreen = (props) => {

    const styles = getStyles()

    const handleGetStarted = () => {
        return props.navigation.navigate("LoginScreen")
    }
    // const handleGetExplore = () => {

    // }

    return (
        <ImageBackground source={IMAGES.onBoardBgImage} style={styles.bgImage}>
            <SafeAreaView style={styles.container}>
                <Button label={"Get Started"} onPress={handleGetStarted} />
                <Spacer height={20} />
                <Button label={"Explore"} buttonContainerStyle={styles.exploreBtn} buttonTextColor={themeColors.black} onPress={handleGetExplore} />
                <Spacer height={20} />
                <CustomText style={styles.footerTxt}>www.domain.com</CustomText>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default OnBoardScreen