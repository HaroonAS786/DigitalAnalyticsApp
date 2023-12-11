import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, View } from 'react-native'
import CustomText from '../../../../components/CustomText'
import { themeColors } from '../../../../config/colors'
import Spacer from '../../../../components/Spacer'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Button from '../../../../components/Button'

const NotificationCard = ({ item, index }) => {

    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <Animated.View entering={FadeInDown.delay(100 * index)} style={styles.container} >
                <View style={styles.view} />
                <Spacer width={6} />
                <CustomText color='#9a9fa5' body>Dear Approving officer, a new data collection cycle is now completed.<CustomText onClick={() => setSelectedIndex(index)} body2 semiBold color={themeColors.primary} > Click here</CustomText> to view data</CustomText>
            </Animated.View>
            {selectedIndex === index &&
                <Animated.View entering={FadeInDown.delay(50 * index)} style={styles.container2} >
                    <CustomText color='#9a9fa5' body2 style={{ width: '60%' }}>Dear Approving officer, a new data collection cycle is now completed. to view data</CustomText>
                    <View style={styles.btnCon}>
                        <Button label={"Approve"} buttonContainerStyle={styles.btn} onPress={() => setSelectedIndex(-1)} />
                        <Spacer width={3} />
                        <Button label={"Decline"} buttonContainerStyle={styles.btn} onPress={() => setSelectedIndex(-1)} />
                    </View>
                </Animated.View>}
        </>
    )
}

export default NotificationCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // alignItems: 'center',
        padding: 6
    },
    container2: {
        flexDirection: 'row',
        // alignItems: 'center',
        flex: 1,
        padding: 6,
        backgroundColor: '#F4F4F4'
    },
    view: {
        width: 6,
        height: 6,
        borderRadius: 100,
        backgroundColor: themeColors.primary,
        marginTop: 12
    },

    btnCon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
  
    },
    btn: {
        padding: 0,
        height: 22,
        borderRadius: 2,
        width: 60,
        borderRadius: 6

    }
})