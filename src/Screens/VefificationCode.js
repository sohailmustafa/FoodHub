import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OTPTextView from 'react-native-otp-textinput'
import CustomText from '../Components/CustomText'
import theme from '../utils/Styles'
import CustomButton from '../Components/CustomButton'

const VefificationCode = () => {
    const [otpInput, setOtpInput] = useState(null)
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/SignUp.png')} resizeMode='cover' style={styles.bgImage}>


                <View style={styles.BoxView}>
                    <CustomText
                        title='Vefification Code'
                        color={theme.colors.black}
                        fontSize={theme.fontSize.mediumHeading}
                        fontFamily={theme.fonts.bold}
                        textAlign='left'

                    />
                </View>
                <View style={styles.form}>
                    <CustomText
                        title={'Please type the verification code sent to prelookstudio@gmail.com'}
                        color={theme.colors.lable}
                        fontSize={14}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginTop={5}
                        marginBottom={10}
                    />


                    <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                        <OTPTextView  handleTextChange={(val) => setOtpInput(val)} tintColor={theme.colors.primary} textInputStyle={styles.inputStyle} />


                    </View>


                </View>


                <View style={{ top: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <CustomText
                        title={'I don’t recevie a code! '}
                        color={'#5B5B5E'}
                        fontSize={14}
                        fontFamily={theme.fonts.medium}


                    />

                    <CustomButton
                        title='Please resend'
                        textAlign='center'
                        justifyContent='center'
                        color={theme.colors.primary}
                        fontSize={14}
                        fontFamily={theme.fonts.medium}


                    />
                </View>



            </ImageBackground>

        </View>
    )
}

export default VefificationCode

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bgImage: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',

    },
    inputStyle: {
        fontFamily: theme.fonts.medium,
        color: theme.colors.primary,
        borderWidth:1,
        borderBottomWidth: 1,
        borderColor: theme.colors.borderColors,
        borderRadius: 10
    }
})
