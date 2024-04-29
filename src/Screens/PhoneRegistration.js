import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomImage from '../Components/CustomImage'
import theme from '../utils/Styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomText from '../Components/CustomText'
import CustomButton from '../Components/CustomButton'
import CustomInput from '../Components/CustomInput'

const PhoneRegistration = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/SignUp.png')} resizeMode='cover' style={styles.bgImage}>


                <View style={styles.BoxView}>
                    <CustomText
                        title='Registration'
                        color={theme.colors.black}
                        fontSize={theme.fontSize.mediumHeading}
                        fontFamily={theme.fonts.bold}
                        textAlign='left'

                    />
                </View>
                <View style={styles.form}>
                    <CustomText
                        title={'Enter your phone number to verify your account'}
                        color={theme.colors.lable}
                        fontSize={14}
                        fontFamily={theme.fonts.SofiaProRegular}
                        textAlign='left'
                        marginBottom={10}
                    />


                    <CustomInput
                        color={theme.colors.black}
                        fontSize={theme.fontSize.regular}
                        fontFamily={theme.fonts.medium}
                        placeholder='(+1) 230-333-0181'
                        marginTop={10}
                        height={55}
                        borderWidth={1}
                        borderRadius={5}
                        borderColor='#EEEEEE'
                        paddingLeft={10}
                        keyboardType='number-pad'
                    />
              


            
                </View>

        
                <View style={{ top: 20, alignItems: 'center' }}>
                    <CustomButton
                        title='SEND'
                        textAlign='center'
                        backgroundColor={theme.colors.primary}
                        height={55}
                        width={200}
                        borderRadius={50}
                        marginTop={10}
                        marginBottom={10}
                        justifyContent='center'
                        color={theme.colors.white}
                        fontSize={theme.fontSize.smallHeading}
                        fontFamily={theme.fonts.medium}


                    />
                </View>
        


            </ImageBackground>
        </View>
    )
}

export default PhoneRegistration

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