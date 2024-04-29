import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomImage from '../Components/CustomImage'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import CustomInput from '../Components/CustomInput'

const RatingPage = () => {
    const [rating, setrating] = useState(4)
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
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
                        source={require('../assets/icons/pizzaHut.png')}
                        width={65}
                        height={65}
                        borderRadius={50}
                        resizeMode='cover'
                    />
                </View>
                <TouchableOpacity >
                    <View style={styles.camera}>
                        <CustomImage
                            source={require('../assets/icons/tick.png')}
                            width={16}
                            height={16}
                            borderRadius={50}
                            resizeMode='cover'
                        />


                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <CustomText
                    title='Pizza Hut'
                    color={theme.colors.black}
                    fontFamily={theme.fonts.semi}
                    fontSize={theme.fontSize.subHeading}
                    bottom={20}
                />
                <CustomText
                    title='4102 Pretty View Lanenda'
                    color={theme.colors.lable}
                    fontFamily={theme.fonts.SofiaProRegular}
                    fontSize={theme.fontSize.regular}
                    bottom={17}
                />
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <View style={{ backgroundColor: '#53D776', width: 8, height: 8, bottom: 15, marginRight: 5, borderRadius: 50 }}>

                </View>
                <CustomText
                    title='Order Delivered'
                    color='#53D776'
                    fontFamily={theme.fonts.SofiaProLight}
                    fontSize={theme.fontSize.regular}
                    bottom={17}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <CustomText
                    title='Please Rate Delivery Service'
                    color={theme.colors.black}
                    fontFamily={theme.fonts.semi}
                    fontSize={theme.fontSize.subHeading}
                    letterSpacing={-0.5}
                    top={5}
                />
                <CustomText
                    title='Good'
                    color={theme.colors.primary}
                    fontFamily={theme.fonts.semi}
                    fontSize={theme.fontSize.subHeading}
                    top={15}
                />
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', top: 30 }}>
                {[1, 2, 3, 4, 5].map((starValue) => (
                    <TouchableOpacity key={starValue} onPress={() => setrating(starValue)}>
                        <FontAwesome name={rating >= starValue ? 'star' : 'star-o'} size={25} color={theme.colors.star} style={styles.star} />
                    </TouchableOpacity>
                ))}
            </View>

            <View >

                <TextInput
                    multiline
                    height={160}
                    marginHorizontal={20}
                    top={60}
                    borderRadius={20}
                    borderColor={theme.colors.borderColors}
                    style={{ borderWidth: 1, padding: 10 }}
                    placeholder="Write your review..."
                    textAlignVertical='top'
                    paddingTop={15}
                    paddingLeft={15}
                />

            </View>
            <TouchableOpacity style={{ alignSelf: 'center', top: 80 }}>
                <View style={styles.Submit}>
                    <CustomText
                        title='SUBMIT'
                        color={theme.colors.white}
                        fontFamily={theme.fonts.regular}
                        fontSize={theme.fontSize.small}

                    />
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default RatingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileImage: {
        width: 94,
        height: 94,
        borderRadius: 50,
        borderWidth: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.colors.white,
        backgroundColor: '#FFC529'

    },
    camera: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 22,
        left: 22
    },
    star: {
        marginHorizontal: 4
    },
    Submit: {

        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 167,
        height: 53
    }




})