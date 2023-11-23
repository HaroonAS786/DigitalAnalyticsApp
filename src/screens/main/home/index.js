import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { getStyles } from './styles'
import Header from '../../../components/Header'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import CustomText from '../../../components/CustomText'
import Spacer from '../../../components/Spacer'

const HomeScreen = (props) => {

    const styles = getStyles()

    return (
        <SafeAreaView style={styles.container}>
            <Header menuClick={() => {
                return props.navigation.dispatch(DrawerActions.openDrawer())
            }} 
            profileClick={() => {
                props.navigation.navigate("ProfileScreen")
            }}
            />
            <Spacer height={20} />
            <CustomText h5 titiliumSemiBold color='black' style={{ marginLeft: 16 }}>Welcome Home</CustomText>
            <Spacer height={20} />
            <CustomText body titilium color='black' style={{ marginLeft: 16 }}>The home is a user dashboard with a fixed layout, the design of the home dashboard will be fixed and dynamically updated
            </CustomText>
        </SafeAreaView>
    )
}

export default HomeScreen