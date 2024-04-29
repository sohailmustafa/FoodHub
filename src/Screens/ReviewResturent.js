import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomImage from '../Components/CustomImage'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import CustomInput from '../Components/CustomInput'

const ReviewResturent = () => {
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
                        source={require('../assets/icons/pHut.png')}
                        width={65}
                        height={65}
                        resizeMode='cover'
                    />
                </View>
               
            </View>

            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                <CustomText
                    title={'How was your last\norder from Pizza Hut ?'}
                    color={theme.colors.black}
                    fontFamily={theme.fonts.SofiaProLight}
                    fontSize={theme.fontSize.subHeading}
                    bottom={17}
                    textAlign='center'
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <CustomText
                    title='Good'
                    color={theme.colors.primary}
                    fontFamily={theme.fonts.semi}
                    fontSize={theme.fontSize.subHeading}
                    
                />
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', top: 15 }}>
                {[1, 2, 3, 4, 5].map((starValue) => (
                    <TouchableOpacity key={starValue} onPress={() => setrating(starValue)}>
                        <FontAwesome name={rating >= starValue ? 'star' : 'star-o'} size={25} color={theme.colors.star} style={styles.star} />
                    </TouchableOpacity>
                ))}
            </View>

            <View >

                <TextInput
                    marginHorizontal={20}
                    top={60}
                    borderRadius={20}
                    borderColor={theme.colors.borderColors}
                    style={{ borderBottomWidth: 1, padding: 10 }}
                    placeholder="Write"
                    textAlignVertical='top'
                    paddingTop={10}
                    paddingLeft={15}
                />

            </View>
            <TouchableOpacity style={{ alignSelf: 'center',  position:'absolute', bottom:40}}>
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

export default ReviewResturent

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
        borderWidth: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        elevation:5,
        borderColor: theme.colors.white,
        backgroundColor: theme.colors.white,
        elevation:10,
        shadowColor: "#FDE992",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 8,

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

        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 167,
        height: 53,
       
    }




})