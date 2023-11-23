import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Animated, { FadeInDown } from 'react-native-reanimated'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'

const DashboardCard = ({ item, index, createSubmissionClick }) => {

    if (item.isBoolean) {
        return (
            <Animated.View entering={FadeInDown.delay(100 * index)} style={styles.container}>
                <View style={[styles.box]}>
                    <Image source={item.img} style={styles.img} resizeMode='contain' />
                </View>
                <Spacer width={5} />
                <View>
                    <CustomText body titilium color='#040404'>{item.label}</CustomText>
                    <Text style={{ width: '22%', fontSize: 8, color: "#040404" }} >{item.disc}</Text>
                </View>
            </Animated.View>
        )
    }

    return (
        <Animated.View entering={FadeInDown.delay(100 * index)} style={styles.container2}>
            <TouchableOpacity onPress={createSubmissionClick}>
                <CustomText body2 titilium color='#040404'>No Dashboard to Show</CustomText>
            </TouchableOpacity>
        </Animated.View >
    )
}

export default DashboardCard

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        borderRadius: 6,
        marginVertical: 8,
        marginHorizontal: 4,
        flexDirection: "row",
        width: '47%',
        padding: 6,

    },

    container2: {
        backgroundColor: '#e8e8e8',
        borderRadius: 6,
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 4,
        flexDirection: "row",
        width: '47%',
        height: 80,
    },
    box: {
        width: 60,
        height: 60,
        marginLeft: 6,
        marginTop: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray"
    },
    img: {
        width: 55,
        height: 55
    },
})