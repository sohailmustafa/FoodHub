import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import theme from '../utils/Styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CustomImage from '../Components/CustomImage'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'

const Address = () => {


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
                    <View style={styles.box1}>
                        <CustomImage
                            source={require('../assets/images/bar.png')}
                            width={20}
                            height={20}
                            borderRadius={10}
                            resizeMode='contain'
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.address}>
                    <CustomText
                        title='Add nsew adress'
                        top={5}
                        fontFamily={theme.fonts.SofiaProRegular}
                        fontSize={theme.fontSize.smallHeading}
                        color={theme.colors.black}
                    />

                </View>
                <View style={styles.box}></View>
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
                    placeholder='Jhon Deo'
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
                    placeholder='example@gmail.com'
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
                    placeholder='+1(783) 0986 8786'
                    height={55}
                    marginTop={10}
                    borderWidth={1}
                    borderRadius={5}
                    borderColor='#EEEEEE'
                    paddingLeft={10}
                    marginBottom={10}
                />
            </View>
        </View>
    )
}

export default Address

const styles = StyleSheet.create({
    container: {
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
    box: {

        flexDirection: 'row',
        alignItems: 'center',
    },
    address: {
        alignItems: 'center'
    },
    box1: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        padding: 10,
        borderRadius: 10
    }, form: {
        paddingHorizontal: 10

    },


})