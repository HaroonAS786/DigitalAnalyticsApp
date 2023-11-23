import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { getStyles } from './styles'
import Header from '../../../components/Header'
import { DrawerActions } from '@react-navigation/native'
import CustomText from '../../../components/CustomText'
import Spacer from '../../../components/Spacer'
import { dashBoardData } from '../../../utils'
import DashboardCard from './components/DashboardCard'

const DashBoardScreen = (props) => {
    const styles = getStyles()

    const handleFileSubmission = () => {
        props.navigation.navigate("AddDashboardScreen")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                menuClick={() => {
                    return props.navigation.dispatch(DrawerActions.openDrawer())
                }}
                profileClick={() => {
                    props.navigation.navigate("ProfileScreen")
                }}
            />
            <Spacer height={20} />
            <CustomText h7 titiliumSemiBold color='black' style={{ marginLeft: 16 }}>Total of 5 Dashboards Available</CustomText>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexWrap: 'wrap', flexDirection: "row", flex: 1, paddingHorizontal: 4, }}>
                    {dashBoardData.map((val, index) => <DashboardCard key={index} item={val} createSubmissionClick={handleFileSubmission} />)}
                </View>
                <Spacer height={20} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default DashBoardScreen