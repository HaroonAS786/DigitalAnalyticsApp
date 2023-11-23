import { DrawerActions } from '@react-navigation/native'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

import DateTimePicker from 'react-native-modal-datetime-picker'
import { IMAGES } from '../../../../assets/images'
import Button from '../../../../components/Button'
import CustomCheckboxGroup from '../../../../components/CustomCheckBox'
import CustomDropdown from '../../../../components/CustomDropDown'
import CustomText from '../../../../components/CustomText'
import Header from '../../../../components/Header'
import ProfileTextInput from '../../../../components/ProfileInputText'
import CustomRadioButton from '../../../../components/RadioButton'
import Spacer from '../../../../components/Spacer'
import CustomTextInputArea from '../../../../components/TextAreaInput'
import { themeColors } from '../../../../config/colors'

const options = [
    { label: 'Hourly', value: 'Hourly' },
    { label: 'Daily', value: 'Daily' },
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Montly', value: 'Monthy' },
    { label: 'Quaterly', value: 'Quaterly' },
    { label: 'Bi-Annually', value: 'Bi-Annually' },
    { label: 'Yearly', value: 'Yearly' },
];

const options2 = ['Data Collectors', 'Dashboard Viewer', 'Administrators'];
const options3 = ['Option1', 'Option2', 'Option3', "Option4"];

const FileSubmissionScreen = (props) => {

    const [selectedDate, setSelectedDate] = useState('Select');
    const [selectedValue, setSelectedValue] = useState('option1');
    const initialSelectedOptions = [];
    const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
    const [selectedOption, setSelectedOption] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const numRows = 8;
    const numColumns = 5;
    const data = [];

    for (let i = 1; i <= numRows; i++) {
        data.push(i);
    }

    const handleSelectDropdown = (option) => {
        setSelectedOption(option);
    };
    const handleSelectOptions = (updatedOptions) => {
        setSelectedOptions(updatedOptions);
    };
    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const hideDatePicker = () => {
        setShowDatePicker(false);
    };
    const handleConfirmDate = (val) => {
        const date = new Date(val);
        const result = format(date, "yyyy-MM-dd")
        setSelectedDate(result)
        setShowDatePicker(false)
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    const handleSubmission = (value) => {
        props.navigation.goBack()
    };

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
            <CustomText h7 titiliumSemiBold color='black' style={{ marginLeft: 16 }}>Submit Field Team KPI Data</CustomText>
            <Spacer height={20} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.conWrap}>
                    <View style={styles.whiteLab}>
                        <ProfileTextInput
                            label={"Text / Number Field"}
                            placeholder={'Write'}
                        // onChangeText={(t) => handleInput(t, "phoneNo")}
                        // errors={data.phoneNo.errors}
                        // success={data.phoneNo.success}
                        />
                    </View>
                    <Spacer height={20} />
                    <View style={styles.whiteLab}>
                        <CustomTextInputArea
                            label={"Description"}
                            placeholder={"Description..."}
                            // onChangeText={(t) => {
                            //     setDescriptionLength(t.length)
                            //     handleInput(t, 'description')
                            // }}
                            multiline={true}
                            maxLength={400}
                        // errors={data?.description?.errors}
                        // success={data?.description?.success}
                        />
                    </View>
                    <Spacer height={20} />
                    <View style={styles.whiteLab}>
                        <CustomText body titilium color="gray">Radio Button</CustomText>
                        <CustomRadioButton
                            options={options}
                            onSelect={handleSelect}
                            selectedValue={selectedValue}
                        />
                    </View>
                    <Spacer height={20} />
                    <View style={styles.whiteLab}>
                        <CustomText body titilium color="gray">Checkboxes</CustomText>
                        <CustomCheckboxGroup
                            options={options2}
                            selectedOptions={selectedOptions}
                            onSelect={handleSelectOptions}
                        />
                    </View>
                    <Spacer height={20} />
                    <View style={styles.dropConWrap}>
                        <View style={[styles.whiteLab, { flex: 1, zIndex: 999 }]}>
                            <CustomText body titilium color="gray">Dropdown</CustomText>
                            <Spacer height={6} />
                            <CustomDropdown
                                options={options3}
                                onSelect={handleSelectDropdown}
                                selectedOption={selectedOption}
                            />
                        </View>
                        <Spacer width={16} />
                        <View style={[styles.whiteLab, { flex: 1 }]}>
                            <CustomText body titilium color="gray">Date</CustomText>
                            <Spacer height={6} />
                            <TouchableOpacity style={styles.dateViewCon} onPress={() => openDatePicker()}>
                                <Image tintColor={'#000'} source={IMAGES.date} style={styles.dateSvg} />
                                <Spacer width={6} />
                                <CustomText color='black'>{selectedDate}</CustomText>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Spacer height={20} />
                    <View style={styles.dropConWrap}>
                        <View style={[styles.whiteLab, { flex: 1 }]}>
                            <CustomText body titilium color="gray">Price</CustomText>
                            <Spacer height={6} />
                            <View style={styles.priceCon}>
                                <View style={styles.priceView}>
                                    <CustomText>NGN</CustomText>
                                </View>
                                <Spacer width={6} />
                                <TextInput placeholder='price' keyboardType='number-pad' onChange={() => { }} style={{ padding: 0, width: '40%' }} />
                            </View>
                        </View>
                        <Spacer width={16} />
                        <View style={[styles.whiteLab, { flex: 1 }]}>
                            <CustomText body titilium color="gray">Total Price</CustomText>
                            <Spacer height={6} />
                            <View style={styles.priceCon}>
                                <View style={styles.priceView}>
                                    <CustomText>NGN</CustomText>
                                </View>
                                <Spacer width={6} />
                                <TextInput placeholder='price' keyboardType='number-pad' onChange={() => { }} style={{ padding: 0, width: '40%' }} />
                            </View>
                        </View>
                    </View>
                    <Spacer height={20} />
                    <View>
                        <View style={styles.whiteLab}>
                            <CustomText body titilium color="gray">Multi-column Sheet</CustomText>
                            <Spacer height={20} />
                            {data.map((rowNumber, rowIndex) => (
                                <View key={rowNumber} style={styles.row}>
                                    <View style={styles.serialNumberCell}>
                                        <CustomText body titilium>{rowNumber}</CustomText>
                                    </View>
                                    {Array.from({ length: numColumns }).map((_, colIndex) => (
                                        <View key={colIndex} style={styles.cell}>
                                            {/* <CustomText body2 titilium color='black'>2</CustomText> */}
                                            <TextInput onChange={() => { }} style={{ padding: 0, width: '30%' }} />
                                        </View>
                                    ))}
                                </View>
                            ))}</View>
                    </View>
                    <Spacer height={20} />
                    <Button label={"Submit"} onPress={handleSubmission} />
                </View>
                <Spacer height={200} />
            </ScrollView>
            <DateTimePicker
                isVisible={showDatePicker}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
            />
        </SafeAreaView>
    )
}

export default FileSubmissionScreen

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    conWrap: {
        marginHorizontal: 16
    },
    whiteLab: {
        backgroundColor: themeColors.white,
        padding: 8,
        borderRadius: 6,
    },

    dropConWrap: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dropDownView: {
        backgroundColor: '#f6f6f6',
        borderRadius: 4,
        padding: 10,
        width: '100%'
    },
    dateViewCon: {
        backgroundColor: '#f6f6f6',
        borderRadius: 4,
        padding: 10,
        width: '100%',
        flexDirection: "row",
        alignItems: "center"
    },
    priceCon: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        borderRadius: 4,
        width: '100%'
    },
    priceView: {
        backgroundColor: '#14365d',
        width: '30%',
        padding: 7,
        borderRadius: 4,
    },
    dateSvg: {
        width: 22,
        height: 22,
    },
    row: {
        flexDirection: 'row',
    },
    serialNumberCell: {
        width: 40, // Adjust the width as needed
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14365d',
        marginRight: 5,
    },
    serialNumberText: {
        fontWeight: 'bold',
    },
    cell: {
        flex: 1,
        borderWidth: .4,
        alignItems: 'center',
        justifyContent: 'center',
    },

})