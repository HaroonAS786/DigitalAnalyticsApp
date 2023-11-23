import React, { useState } from 'react'
import { ImageBackground, View } from 'react-native'
import { IMAGES } from '../../../assets/images'
import Button from '../../../components/Button'
import CustomText from '../../../components/CustomText'
import Spacer from '../../../components/Spacer'
import { themeColors } from '../../../config/colors'
import { getStyles } from './styles'
import SelectTenant from '../../../components/SelectTennat'

const LoginSuccess = (props) => {

    const [loading, setLoading] = useState(false);
    const styles = getStyles()
    const [selectedTenant, setSelectedTenant] = useState(null); // State to track the selected tenant

    // Function to handle tenant selection
    const handleTenantSelection = (tenantName) => {
        setSelectedTenant(tenantName);
    };
    const handleLoginSuccess = (t, tag) => {
        return props.navigation.navigate("MainStack")
    };

    const data = [
        {
            label: 'Triconv Limited',
            svg: IMAGES.Tricon
        },
        {
            label: 'Al Baraka Bank (Pakistan) Limited',
            svg: IMAGES.AlBaraka
        },
        {
            label: 'Softcity Group',
            svg: IMAGES.softCity
        }
    ]

    return (
        <ImageBackground style={styles.bgImage} source={IMAGES.onBoardBgImage}>
            <View style={styles.container}>
                <View style={styles.loginSuccessContainer}>
                    <Spacer height={20} />
                    <CustomText h4 color={themeColors.black} titiliumSemiBold>LOGIN SUCCESSFUL</CustomText>
                    <CustomText body color={'#272B30'} titilium>Choose tenant</CustomText>
                    <Spacer height={20} />
                    {data.map((val, index) =>
                        <SelectTenant
                            key={index}
                            title={val.label}
                            svg={val.svg}
                            selected={val.label === selectedTenant}
                            onChangeValue={handleTenantSelection}

                        />)}
                    <Spacer height={20} />
                    <Button disabled={!selectedTenant} label={"Continue"} buttonContainerStyle={styles.continueBtn} onPress={handleLoginSuccess} />

                </View>
            </View>
        </ImageBackground>
    )
}

export default LoginSuccess







