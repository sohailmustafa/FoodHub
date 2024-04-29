import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import theme from '../utils/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from './CustomButton';

const ChoiceAdd = (props) => {
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonPress = (btn) => {
        setActiveButton(btn);
    };
    return (
        <View>
            <View style={styles.choiceOrder}>
                <CustomText
                    title='Choice of Add On'
                    marginTop={5}
                    fontFamily={theme.fonts.semi}
                    fontSize={theme.fontSize.smallHeading}
                    color={theme.colors.headingColors}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CustomImage
                        source={require('../assets/images/pepper_img.png')}
                        resizeMode='contain'
                        width={50}
                        height={50}
                        marginRight={10}
                    />
                    <CustomText
                        title='Pepper Julienned'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.HelveticaBold}
                        fontSize={theme.fontSize.regular2}

                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                    <CustomText
                        title='+$2.30'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.HelveticaBold}
                        fontSize={theme.fontSize.regular2}
                        right={5}

                    />
                    <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => handleButtonPress(1)}>
                            <MaterialCommunityIcons name={activeButton === 1 ? 'radiobox-marked' : 'radiobox-blank'} size={25} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CustomImage
                        source={require('../assets/images/babySpinach_img.png')}
                        resizeMode='contain'
                        width={50}
                        height={50}
                        marginRight={10}
                    />
                    <CustomText
                        title='Baby Spinach'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.HelveticaBold}
                        fontSize={theme.fontSize.regular2}

                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                    <CustomText
                        title='+$4.70'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.HelveticaBold}
                        fontSize={theme.fontSize.regular2}
                        right={5}

                    />
                    <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => handleButtonPress(2)}>
                            <MaterialCommunityIcons name={activeButton === 2 ? 'radiobox-marked' : 'radiobox-blank'} size={25} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CustomImage
                        source={require('../assets/images/masroom_img.png')}
                        resizeMode='contain'
                        width={50}
                        height={50}
                        marginRight={10}
                    />
                    <CustomText
                        title='Mashroom'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.HelveticaBold}
                        fontSize={theme.fontSize.regular2}

                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', right: 5 }}>
                    <CustomText
                        title='+$2.50'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.HelveticaBold}
                        fontSize={theme.fontSize.regular2}
                        right={5}

                    />
                    <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => handleButtonPress(3)}>
                            <MaterialCommunityIcons name={activeButton === 3 ? 'radiobox-marked' : 'radiobox-blank'} size={25} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop:5}} onPress = {props.onPress}>
                <View style={styles.addToCart}>
                <CustomImage
                        source={require('../assets/icons/cart.png')}
                        resizeMode='contain'
                        width={40}
                        height={40}
                        right={5}
                        
                        
                    />
                    <CustomText
                    title='ADD TO CART'
                    color={theme.colors.white}
                        fontFamily={theme.fonts.regular}
                        fontSize={theme.fontSize.regular2}
                        right={7}
                    />
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default ChoiceAdd

const styles = StyleSheet.create({
    choiceOrder: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addToCart:{
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:theme.colors.primary,
        flexDirection:'row',
        borderRadius:50,
        width:167,
        height:53
    }

})