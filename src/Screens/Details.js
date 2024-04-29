import { ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomImage from '../Components/CustomImage'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomText from '../Components/CustomText'
import theme from '../utils/Styles'
import ChoiceAdd from '../Components/ChoiceAdd'


const Details = ({navigation}) => {
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
  

    const handleMinusPress = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0)); // Ensure count doesn't go below zero
    };

    const handlePlusPress = () => {
        setCount(prevCount => prevCount + 1);
    };

   

    return (
        <View style={styles.container}>
            <View style={styles.foodDetails}>
                <ImageBackground source={require('../assets/images/foodImge3.png')} resizeMode='contain' style={styles.foodImage}>
                    <TouchableOpacity>
                        <CustomImage
                            source={require('../assets/images/back.png')}
                            width={70}
                            height={70}
                            marginTop={5}
                            borderRadius={10}
                            resizeMode='contain'
                        />

                    </TouchableOpacity>
                    <View style={styles.heart}>
                        <TouchableOpacity>
                            <Fontisto name={'heart'} size={17} color='#FFF' />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
                <CustomText
                    title='Ground Beef Tacos'
                    fontFamily={theme.fonts.semi}
                    fontSize={theme.fontSize.mediumAuto}
                    color={theme.colors.black}
                    letterSpacing={-0.5}
                />

            </View>

            <View style={styles.ratinCard}>
                <Fontisto name={'star'} size={15} color='#FFC529' />
                <Text style={styles.rating}> 4.5 </Text>
                <Text style={styles.reviews}>(30+)   </Text>

                <TouchableOpacity>
                    <CustomText
                        title='See Review'
                        color={theme.colors.primary}
                        fontFamily={theme.fonts.semi}
                        fontSize={theme.fontSize.regular2}
                        textDecorationLine={'underline'}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom:5 }}>
                <View style={styles.priceView}>
                    <CustomText
                        title='$'
                        top={6}
                        color={theme.colors.primary}
                        fontSize={theme.fontSize.regular}
                    />
                    <CustomText
                        title='9.50'
                        color={theme.colors.primary}
                        fontFamily={theme.fonts.semi}
                        fontSize={theme.fontSize.mediumAuto}
                        letterSpacing={-1}

                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={handleMinusPress}
                        style={{
                            backgroundColor: theme.colors.white,
                            borderWidth: 1,
                            borderRadius: 50,
                            borderColor: theme.colors.primary,

                        }}
                    >
                        <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Entypo name={'minus'} size={20} color={theme.colors.primary} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <CustomText
                            title={' ' + count + ' '}
                            color={theme.colors.black}
                            fontFamily={theme.fonts.semi}
                            fontSize={theme.fontSize.small}
                            bottom={2}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={handlePlusPress}
                        style={{
                            backgroundColor: theme.colors.primary,
                            borderWidth: 1,
                            borderRadius: 50,
                            borderColor: theme.colors.primary,

                        }}
                    >
                        <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Entypo name={'plus'} size={20} color={theme.colors.white} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            <View>
                <CustomText
                    title={'Brown the beef better. Lean ground beef\nI like to use 85% lean angus. Garlic use fresh\nchopped. Spices chili powder, cumin, onion powder.'}
                    marginTop={2}
                    lineHeight={20}
                    color={theme.colors.lable}
                    fontFamily={theme.fonts.regular}
                    fontSize={theme.fontSize.regular}
                />
            </View>
         <ChoiceAdd
         onPress = {() => navigation.navigate('Cart')}
         />
        
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: theme.colors.white
    },
    foodDetails: {
        borderRadius: 20,
        // backgroundColor:'red'

    },
    foodImage: {
        width: '100%',
        height: 210,
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10


    },
    heart: {
        backgroundColor: '#FE724C',
        width: 30,
        height: 30,
        top: 15,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,

    },
    ratinCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 5

    },
    rating: {
        color: theme.colors.black,
        fontFamily: theme.fonts.semi,
        fontSize: theme.fontSize.regular
    },
    reviews: {
        color: theme.colors.lable,
        fontFamily: theme.fonts.regular,
        fontSize: theme.fontSize.regular2
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    minusIcon: {
        backgroundColor: theme.colors.primary,
        borderRadius: 50
    },
    plusIcon: {
        backgroundColor: theme.colors.white,
        borderRadius: 50
    },
 
})