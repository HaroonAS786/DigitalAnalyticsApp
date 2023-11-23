import { DrawerActions } from '@react-navigation/native'
import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import BarChartComponent from '../../../../components/BarChat'
import CustomText from '../../../../components/CustomText'
import Header from '../../../../components/Header'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import PieChartComponent from '../../../../components/PieChart'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { chartColumnData } from '../../../../utils'

const AddDashboardScreen = (props) => {

    return (
        <SafeAreaView>
            <Header menuClick={() => {
                return props.navigation.dispatch(DrawerActions.openDrawer())
            }}
            profileClick={() => {
                props.navigation.navigate("ProfileScreen")
            }}
            />
            <Spacer height={20} />
            <CustomText h7 titiliumSemiBold color='black' style={{ marginLeft: 16 }}>Field Team KPI Charts</CustomText>
            <Spacer height={20} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.conWrap}>
                    <View style={styles.whiteLab}>
                        <CustomText body titiliumSemiBold color="black">Bar chart</CustomText>
                        <BarChartComponent />
                        <View style={styles.column}>
                            {chartColumnData.map((val) => {
                                return (<TouchableOpacity style={styles.columnBox}>
                                    {val}
                                </TouchableOpacity>)
                            }
                            )}
                        </View>
                    </View>
                    <Spacer height={40} />
                    <View style={styles.whiteLab}>
                        <CustomText body titiliumSemiBold color="black">Pie Chart</CustomText>
                        <PieChartComponent />
                        <View style={styles.column}>
                            {chartColumnData.map((val) => {
                                return (<TouchableOpacity style={styles.columnBox}>
                                    {val}
                                </TouchableOpacity>)
                            }
                            )}
                        </View>
                    </View>
                </View>
                <Spacer height={60} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddDashboardScreen

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    whiteLab: {
        backgroundColor: themeColors.white,
        padding: 8,
        borderRadius: 6,
    },
    conWrap: {
        marginLeft: 16,
        marginRight: 50
    },

    column: {
        backgroundColor: "tranparent",
        position: 'absolute',
        right: -39,

    },
    columnBox: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 12
    },
    image: {
        width: 24,
        height: 24
    }
})