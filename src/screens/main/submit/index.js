import { DrawerActions } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import CustomText from '../../../components/CustomText'
import Header from '../../../components/Header'
import Spacer from '../../../components/Spacer'
import { fileData } from '../../../utils'
import FileSubmissionCard from './components/FileSubmissionCard'
import { getStyles } from './styles'

const FileSubmitScreen = (props) => {

    const styles = getStyles()

    const handleFileSubmission = () => {
        props.navigation.navigate("FileSubmissionScreen")
    }

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
            <CustomText h7 titiliumSemiBold color='black' style={{ marginLeft: 16 }}>Total 4 Submissions Available</CustomText>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexWrap: 'wrap', flexDirection: "row", flex: 1, paddingHorizontal: 4, }}>
                    {fileData.map((val, index) => <FileSubmissionCard key={index} item={val} createSubmissionClick={handleFileSubmission} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FileSubmitScreen