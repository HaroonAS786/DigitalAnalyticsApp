import { DrawerActions } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { Alert, Dimensions, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'


import { IMAGES } from '../../../assets/images'
import { CameraIcon, SelectCamera, SelectGallery } from '../../../assets/svgs'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import ProfileTextInput from '../../../components/ProfileInputText'
import SelectTenant from '../../../components/SelectTennat'
import Spacer from '../../../components/Spacer'
import { getStyles } from './styles'
import CustomText from '../../../components/CustomText'
import { useMediaGroup } from '../../../hooks/useMediaGroup'
import FadeModal from '../../../components/CustomModal'

const ProfileScreen = (props) => {

    const styles = getStyles()
    const { selectImage } = useMediaGroup()
    const [loading, setLoading] = useState(false);
    const [selectedTenant, setSelectedTenant] = useState(true);
    const [imageSource, setImageSource] = useState(null);
    const refRBImage = useRef();
    const [data, setData] = useState({
        fName: {
            value: "",
            errors: [],
        },
        lName: {
            value: "",
            errors: [],
        },
        phoneNo: {
            value: "",
            errors: [],
        },
        email: {
            value: "",
            errors: [],
        },
        company: {
            value: "",
            errors: [],
        },
        country: {
            value: "",
            errors: [],
        },
    });

    const isValidated =
        data?.fName?.value?.length &&
        data?.lName?.value?.length &&
        data?.phoneNo?.value?.length &&
        data?.email?.value?.length && !selectedTenant

    const handleTenantSelection = () => {
        setSelectedTenant(!selectedTenant);
    };
    const handleUpdateProfile = (t, tag) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            Alert.alert("Profile Updated Successfully")
        }, 2000)
    };
    const handleInput = (t, tag) => {
        setData((prevState) => {
            const valueToSet = { value: "" };
            if (tag === "fName") {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;

                } else {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "FirstName Required",
                    ];
                }
            }
            if (tag === "lName") {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;

                } else {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "LastName Required",
                    ];
                }
            }
            if (tag === "email") {
                valueToSet.value = t;
                if (t.match(/.@.*\.../)) {
                    valueToSet.value = t;

                } else {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Enter Valid Email",
                    ];
                }
            }
            if (tag === "phoneNo") {
                valueToSet.value = t;
                if (t.length > 0) {
                    valueToSet.value = t;

                } else {
                    valueToSet.success = [];
                    valueToSet.errors = [
                        "Phone Number Required",
                    ];
                }
            }
            else {
                valueToSet.value = t;
            }
            return {
                ...prevState,
                [tag]: valueToSet,
            };
        });
    };

    const imageData = [
        {
            label: 'Camera',
            onPress: () => {
                selectImage('camera').then((res) => {
                    setImageSource(res)
                    refRBImage.current.close()
                }).catch(error => {
                    console.log(error)
                })
            },
            svg: <SelectCamera />,
        },
        {
            label: 'Gallery',
            onPress: () => {
                selectImage('gallery').then((res) => {
                    setImageSource(res)
                    refRBImage.current.close()
                }).catch(error => {
                    console.log(error)
                })
            },
            svg: <SelectGallery />,
        },
    ];

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
                <View style={styles.profileContainer}>
                    <View style={styles.profileImg} >
                        <Image style={styles.Img}
                            source={imageSource ? imageSource : { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRygGnARKSaw09hN91f4-KivcXxsCk6sIKOhZcP8&s' }} />
                        <TouchableOpacity style={styles.camera} onPress={() => {
                            refRBImage.current.open()
                        }}>
                            <CameraIcon />
                        </TouchableOpacity>
                    </View>
                    <Spacer height={70} />
                    <ProfileTextInput
                        label={"First Name"}
                        placeholder={'Firstname'}
                        onChangeText={(t) => handleInput(t, "fName")}
                        errors={data.fName.errors}
                        success={data.fName.success}
                    />
                    <Spacer height={25} />
                    <ProfileTextInput
                        label={"Last Name"}
                        placeholder={'Lastname'}
                        onChangeText={(t) => handleInput(t, "lName")}
                        errors={data.lName.errors}
                        success={data.lName.success}
                    />
                    <Spacer height={25} />
                    <ProfileTextInput
                        label={"Email"}
                        placeholder={'Email'}
                        onChangeText={(t) => handleInput(t, "email")}
                        errors={data.email.errors}
                        success={data.email.success}
                    />
                    <Spacer height={25} />
                    <ProfileTextInput
                        label={"Phone"}
                        placeholder={'Phone'}
                        onChangeText={(t) => handleInput(t, "phoneNo")}
                        keyboardType={'number-pad'}
                        errors={data.phoneNo.errors}
                        success={data.phoneNo.success}
                    />
                    <Spacer height={25} />
                    <ProfileTextInput
                        label={"Company (Optional)"}
                        placeholder={'Company (Optional)'}
                        onChangeText={(t) => handleInput(t, "company")}
                        errors={data.company.errors}
                        success={data.company.success}
                    />
                    <Spacer height={25} />
                    <ProfileTextInput
                        label={"Country (Optional)"}
                        placeholder={'Country (Optional)'}
                        onChangeText={(t) => handleInput(t, "country")}
                        errors={data.country.errors}
                        success={data.country.success}
                    />
                    <Spacer height={25} />
                    <Button loading={loading} disabled={!isValidated} onPress={handleUpdateProfile} label={"Update"} buttonContainerStyle={styles.updateBtn} />
                    <Spacer height={25} />
                    <SelectTenant
                        title={"Triconv Limited"}
                        svg={IMAGES.Tricon}
                        selected={!selectedTenant}
                        onChangeValue={handleTenantSelection}
                    />
                    <CustomText color="gray">Switch</CustomText>
                    <Spacer height={25} />
                </View>
                <Spacer height={100} />
            </ScrollView>
            <FadeModal
                height={Dimensions.get('window').height * 0.2}
                refRBSheet={refRBImage}>
                <View style={styles.mediaOptionCon}>
                    {imageData?.map((val, indx) => {
                        return (
                            <View>
                                <Spacer
                                    height={20}
                                />
                                <TouchableOpacity
                                    onPress={val.onPress}
                                    style={styles.mediaOptionStyle}>
                                    {val.svg}
                                    <Spacer width={10} />
                                    <CustomText h6 titiliumSemiBold color='black'>{val.label}</CustomText>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </FadeModal>
        </SafeAreaView>
    )
}

export default ProfileScreen