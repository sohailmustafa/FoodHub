import React, { useEffect, useState, } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import custom components and styles
import theme from '../utils/Styles';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import CustomInput from '../Components/CustomInput';

// Define the Profile component
const Profile = ({navigation}) => {
    // State variables
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        getUserData();


    }, []);

    // Function to open image picker
    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.error('Image picker error:', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };

    // Function to get user data from AsyncStorage
    const getUserData = async () => {
        try {
            // Get user data from AsyncStorage
            const userDataJSON = await AsyncStorage.getItem('userData');

            if (userDataJSON) {
                try {
                    const userData = JSON.parse(userDataJSON);
                    // Update state only if the component is still mounted
                    setFullName(userData.fullName || '');
                    setEmail(userData.email || '');
                    setPhoneNumber(userData.phoneNumber || '');
                    setSelectedImage(userData.profileImage || '');
                } catch (error) {
                    console.error('Error parsing user data:', error);
                }
            } else {
                console.log('No user data found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error retrieving user data:', error);
        }
    };

    const handleSave = async () => {
        try {
            // Get existing user data from AsyncStorage
            const userDataJSON = await AsyncStorage.getItem('userData');
            const existingUserData = JSON.parse(userDataJSON) || {};

            // Update the user data with the new values
            const updatedUserData = {
                ...existingUserData,
                fullName: fullName,
                email,
                phoneNumber: phoneNumber,
                profileImage: selectedImage, // Use selectedImage instead of profileImage
            };
            // Save the updated user data to AsyncStorage
            await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));

            // Show success message or navigate to another screen
            navigation.navigate('SignIn');
        } catch (error) {
            console.error('Error saving profile:', error);
            // Show an error message to the user
            Alert.alert('Error', 'An error occurred while saving the profile');
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/ProfileImg.png')} style={styles.bgImage} resizeMode='cover'>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                        <View>
                            <CustomImage
                                source={require('../assets/images/back.png')}
                                width={80}
                                height={80}
                                borderRadius={10}
                                resizeMode='cover'
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View style={styles.profileImage}>
                        <CustomImage
                        source={require('../assets/images/userProfile.png')}
                            // source={selectedImage ? { uri: selectedImage } : require('../assets/images/userProfile.png')}
                            width={80}
                            height={80}
                            borderRadius={50}
                            resizeMode='cover'
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={openImagePicker}>
                        <View style={styles.camera}>
                            <Entypo name={'camera'} size={16} colors={theme.colors.lable} />


                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <CustomText
                        title={fullName}
                        color={theme.colors.black}
                        fontFamily={theme.fonts.semi}
                        fontSize={theme.fontSize.subHeading}
                        bottom={20}
                    />
                    <CustomText
                        title='Edit Profile'
                        color={theme.colors.lable}
                        fontFamily={theme.fonts.SofiaProRegular}
                        fontSize={theme.fontSize.regular}
                        bottom={17}
                    />
                </View>

                <View style={styles.form}>

                    <CustomText
                        title='Full Name'
                        color={theme.colors.lable}
                        fontSize={theme.fontSize.small}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginTop={10}
                    />


                    <CustomInput
                        color={theme.colors.black}
                        fontSize={theme.fontSize.medium}
                        fontFamily={theme.fonts.medium}
                        placeholder="Full Name"
                        defaultValue={fullName}
                        onChangeText={(text) => setFullName(text)}
                        marginTop={10}
                        height={55}
                        borderWidth={1}
                        borderRadius={5}
                        borderColor='#EEEEEE'
                        paddingLeft={10}
                    />
                    <CustomText
                        title='Email'
                        color={theme.colors.lable}
                        fontSize={theme.fontSize.small}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginTop={20}
                    />


                    <CustomInput
                        color={theme.colors.black}
                        fontSize={theme.fontSize.medium}
                        fontFamily={theme.fonts.semi}
                        placeholder="Email"
                        defaultValue={email}
                    
                        // onChangeText={(text) => setEmail(text)}
                        marginTop={10}
                        height={55}
                        borderWidth={1}
                        borderRadius={5}
                        borderColor='#EEEEEE'
                        paddingLeft={10}
                    />
                    <CustomText
                        title='Phone Number'
                        color={theme.colors.lable}
                        fontSize={theme.fontSize.small}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginTop={20}
                    />


                    <CustomInput
                        color={theme.colors.black}
                        fontSize={theme.fontSize.semi}
                        fontFamily={theme.fonts.medium}
                        placeholder='Phone Number'
                        defaultValue={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        height={55}
                        marginTop={10}
                        borderWidth={1}
                        borderRadius={5}
                        borderColor='#EEEEEE'
                        paddingLeft={10}
                        marginBottom={10}
                    />
                </View>
                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 10 }} onPress={handleSave}>
                    <View style={styles.savebtn}>

                        <CustomText
                            title='SAVE'
                            color={theme.colors.white}
                            fontFamily={theme.fonts.medium}
                            fontSize={theme.fontSize.regular2}

                        />
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bgImage: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: theme.colors.screenBackBgColor
    },
    header: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileImage: {
        width: 94,
        height: 94,
        borderRadius: 50,
        borderWidth: 7,
        borderColor: theme.colors.white,
        elevation: 10,
        shadowColor: "#FDE992",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },
    camera: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 22,
        left: 22
    },
    form: {
        paddingHorizontal: 10

    },
    savebtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        borderRadius: 50,
        marginTop: 10,
        width: 167,
        height: 53
    }


})