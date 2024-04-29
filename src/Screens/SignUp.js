import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomImage from '../Components/CustomImage'
import theme from '../utils/Styles'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomText from '../Components/CustomText'
import CustomButton from '../Components/CustomButton'
import CustomInput from '../Components/CustomInput'
import AsyncStorage from '@react-native-async-storage/async-storage'
import auth from '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';

const SignUp = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [profileImage, setProfileImage] = useState(require('../assets/images/userProfile.png'));

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const signup = () => {
        if (!email.includes('@') || !email.includes('.com')) {
            Alert.alert('Invalid Email Address');
        } else if (password.length < 6) {
            Alert.alert('Password less than 6 characters');
        } else {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('yes');
                    storeUserData(); // Uncomment this line to store user data
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });

        }
    }
    const storeUserData = async () => {
        try {
            const userData = {
                fullName,
                email,
                phoneNumber,
                password,
                profileImage,
            };
            // Convert userData object to JSON string
            const userDataJSON = JSON.stringify(userData);

            // Store the data using AsyncStorage
            await AsyncStorage.setItem('userData', userDataJSON);

            console.log('User data stored successfully:', userDataJSON);

            // Navigate to home screen after storing user data
            navigation.navigate('SignIn');
        } catch (error) {
            console.error('Error storing user data:', error);
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/SignUp.png')} resizeMode='cover' style={styles.bgImage}>


                <View style={styles.BoxView}>
                    <CustomText
                        title='Sign Up'
                        color={theme.colors.black}
                        fontSize={theme.fontSize.heading}
                        fontFamily={theme.fonts.bold}
                        textAlign='left'

                    />
                </View>
                <View style={styles.form}>

                    <CustomText
                        title='Full Name'
                        color={theme.colors.lable}
                        fontSize={theme.fontSize.small}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginTop={15}
                    />


                    <CustomInput
                        color={theme.colors.black}
                        fontSize={theme.fontSize.regular2}
                        fontFamily={theme.fonts.medium}
                        placeholder='Jhon Deo'
                        marginTop={8}
                        height={55}
                        borderWidth={1}
                        borderRadius={5}
                        borderColor='#EEEEEE'
                        paddingLeft={10}
                        onChangeText={(text) => setFullName(text)}
                    />


                    <CustomText
                        title='Email'
                        color={theme.colors.lable}
                        fontSize={theme.fontSize.small}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginTop={10}
                    />
                    <CustomInput
                        color={theme.colors.black}
                        fontSize={theme.fontSize.regular2}
                        fontFamily={theme.fonts.medium}
                        placeholder='example@gmail.com'
                        onChangeText={(text) => setEmail(text)}
                        marginTop={8}
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
                        marginTop={10}
                    />
                    <CustomInput
                        color={theme.colors.black}
                        fontSize={theme.fontSize.regular2}
                        fontFamily={theme.fonts.medium}
                        placeholder='(+1) 230-333-0181'
                        onChangeText={(text) => setPhoneNumber(text)}
                        marginTop={8}
                        height={55}
                        borderWidth={1}
                        borderRadius={5}
                        borderColor='#EEEEEE'
                        paddingLeft={10}
                        keyboardType='number-pad'
                    />

                    <CustomText
                        title='Password'
                        color={theme.colors.lable}
                        fontSize={theme.fontSize.small}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginTop={10}

                    />

                    <View style={{ flexDirection: 'row', marginTop: 8, borderWidth: 1, borderRadius: 5, borderColor: '#EEEEEE' }}>
                        <View style={{ flex: 0.85, justifyContent: 'center' }}>
                            <CustomInput
                                color={theme.colors.black}
                                fontSize={theme.fontSize.regular2}
                                fontFamily={theme.fonts.medium}
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                placeholder='*******'
                                height={55}
                                paddingLeft={10}
                            />
                        </View>
                        <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                            <Feather name={showPassword ? 'eye' : 'eye-off'} size={25} style={{}} onPress={togglePasswordVisibility} />
                        </View>
                    </View>


                </View>

                <View style={{ top: 20, alignItems: 'center' }}>
                    <CustomButton
                        title='Sign Up'
                        textAlign='center'
                        backgroundColor={theme.colors.primary}
                        height={55}
                        paddingLeft={80}
                        paddingRight={80}
                        borderRadius={50}
                        marginTop={10}
                        marginBottom={10}
                        justifyContent='center'
                        color={theme.colors.white}
                        fontSize={theme.fontSize.smallHeading}
                        fontFamily={theme.fonts.medium}
                        onPress={signup}


                    />
                </View>
                <View style={{ flexDirection: 'row', top: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomText
                        title='Already have an account? '
                        color={theme.colors.light}
                        fontSize={theme.fontSize.miniHeading}
                        fontFamily={theme.fonts.medium}
                        textAlign='center'
                        marginTop={10}
                        marginBottom={10}


                    />
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <CustomText
                            title='Sign In'
                            color={theme.colors.primary}
                            fontSize={theme.fontSize.miniHeading}
                            fontFamily={theme.fonts.medium}
                            textAlign='center'
                            marginTop={10}
                            marginBottom={10}



                        />
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    bgImage: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',

    },
    BoxView: {
        //    backgroundColor:'red',


    },
    form: {
        borderRadius: 10,
        marginTop: 15

    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 15,
        top: 40,
        marginHorizontal: 10,

    },
    horizontalLine: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(179, 179, 179 ,0.5)',
    },
    orText: {
        marginHorizontal: 10,
        fontFamily: theme.fonts.medium,
        fontSize: theme.fontSize.regular,
        color: '#5B5B5E',
    },

})