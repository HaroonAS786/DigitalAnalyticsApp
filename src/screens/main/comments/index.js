import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { getStyles } from './styles'
import Header from '../../../components/Header'
import { DrawerActions } from '@react-navigation/native'

const CommentsScreen = (props) => {

    const styles = getStyles()

    return (
        <SafeAreaView style={styles.container}>
            <Header menuClick={() => {
                return props.navigation.dispatch(DrawerActions.openDrawer())
            }} />
        </SafeAreaView>
    )
}

export default CommentsScreen