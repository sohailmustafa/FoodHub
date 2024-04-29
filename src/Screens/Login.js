import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomImage from '../Components/CustomImage';
import theme from '../utils/Styles';
import Feather from 'react-native-vector-icons/Feather';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
// import '@react-native-firebase/firestore';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading,setLoading] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = () => {
        setLoading(true)
        if (!email.includes('@') || !email.includes('.com')) {
            Alert.alert('Invalid Email Address');
        } else if (password.length < 6) {
            Alert.alert('Password less than 8 characters');
        } else {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((resp) => {
                    console.log(resp)
                    login()
                    setLoading(false)
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
        
                    console.error(error);
                });
        }
    }     
    const login = async () => {
        try {
            // Retrieve stored user data from AsyncStorage
            const userDataJSON = await AsyncStorage.getItem('userData');

            if (userDataJSON) {
                // Parse the JSON string to get the user data object
                const userData = JSON.parse(userDataJSON);

                // Check if entered email and password match stored data
                if (email === userData.email && password === userData.password) {
                    // Navigate to the home screen
                    navigation.navigate('BottomTabs');
                } else {
                    // Display an alert for incorrect email or password
                    Alert.alert('Invalid Credentials', 'Please check your email and password.');
                }
            } else {
                // Display an alert for no stored user data
                Alert.alert('No User Data', 'Please sign up first.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/SignUp.png')} resizeMode='cover' style={styles.bgImage}>


                <View style={styles.BoxView}>
                    <CustomText
                        title='Login'
                        color={theme.colors.black}
                        fontSize={theme.fontSize.heading}
                        fontFamily={theme.fonts.bold}
                        textAlign='left'

                    />
                </View>
                <View style={styles.form}>


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
                        fontSize={theme.fontSize.regular2}
                        fontFamily={theme.fonts.medium}
                        placeholder='example@gmail.com'
                        onChangeText={(text) => setEmail(text)}
                        marginTop={10}
                        height={55}
                        borderWidth={1}
                        borderRadius={5}
                        borderColor='#EEEEEE'
                        paddingLeft={10}
                    />
                    <CustomText
                        title='Password'
                        color={theme.colors.lable}
                        fontSize={theme.fontSize.small}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginTop={20}

                    />

                    <View style={{marginTop:10,flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: '#EEEEEE'}}>
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

                <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')} style={{ marginTop: 10 }}>
                    <CustomText
                        title='Forget Password?'
                        color={theme.colors.primary}
                        fontSize={theme.fontSize.miniHeading}
                        fontFamily={theme.fonts.medium}
                        textAlign='center'
                        marginTop={10}




                    />
                </TouchableOpacity>

                <View style={{ top: 20, alignItems: 'center' }}>
                    <CustomButton
                        title='Login'
                        textAlign='center'
                        backgroundColor={theme.colors.primary}
                        height={55}
                        paddingLeft={90}
                        paddingRight={90}
                        borderRadius={50}
                        marginTop={10}
                        marginBottom={10}
                        justifyContent='center'
                        color={theme.colors.white}
                        fontSize={theme.fontSize.smallHeading}
                        fontFamily={theme.fonts.medium}
                        onPress={handleLogin}
                       loading={loading}


                    />
                </View>
                <View style={{ flexDirection: 'row', top: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomText
                        title='Don’t have an account? '
                        color={theme.colors.light}
                        fontSize={theme.fontSize.miniHeading}
                        fontFamily={theme.fonts.medium}
                        textAlign='center'
                        marginTop={10}
                        marginBottom={10}


                    />
                    <TouchableOpacity  onPress={() => navigation.navigate('SignUp')}>
                      
                        <CustomText
                            title='Sign Up'
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

export default Login

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