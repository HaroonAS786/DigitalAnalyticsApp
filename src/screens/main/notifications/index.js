import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getStyles } from './styles'
import Header from '../../../components/Header'
import { DrawerActions } from '@react-navigation/native'
import CustomText from '../../../components/CustomText'
import Spacer from '../../../components/Spacer'
import NotificationCard from './components/NotificationCard'
import { ScrollView } from 'react-native-gesture-handler'
import { ArrowLeft, ArrowRight } from '../../../assets/svgs'

const data = Array.from({ length: 100 }, (_, i) => ({ key: String(i) }));

const Notifications = (props) => {

    const styles = getStyles()
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    const seperator = useCallback(() => {
        return <View style={styles.seperatorView} />
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header menuClick={() => {
                return props.navigation.dispatch(DrawerActions.openDrawer())
            }}
                profileClick={() => {
                    props.navigation.navigate("ProfileScreen")
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer height={20} />
                <CustomText h5 titiliumSemiBold color='black' style={{ marginLeft: 16 }}>Notifications</CustomText>
                <Spacer height={20} />
                <View style={styles.notifyCon}>
                    <Spacer height={12} />
                    <FlatList
                        data={data.slice(currentPage * 5, (currentPage + 1) * 10)}
                        renderItem={({ item, index }) => (
                            <NotificationCard item={item} index={index} />
                        )}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        ItemSeparatorComponent={seperator}
                        keyExtractor={(item) => item.key}
                    />
                    <Spacer height={12} />
                    <View style={styles.pagination}>
                        <Spacer width={12} />
                        <TouchableOpacity onPress={handlePrevPage} disabled={currentPage === 0} style={styles.arrowBox}>
                            <ArrowLeft />
                        </TouchableOpacity>
                        <Spacer width={12} />
                        <View style={styles.arrowBox}>
                            <CustomText color='black' body2 style={styles.pageNumber}>{currentPage + 1}</CustomText>
                        </View>
                        <Spacer width={12} />
                        <TouchableOpacity onPress={handleNextPage} disabled={currentPage === Math.floor(data.length / 5)} style={styles.arrowBox}>
                            <ArrowRight />
                        </TouchableOpacity>
                    </View>
                </View>
                <Spacer height={60} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications