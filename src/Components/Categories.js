import { StyleSheet, View, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import theme from '../utils/Styles'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomImage from '../Components/CustomImage'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'
import FeaturedRestaurants from '../Components/FeaturedRestaurants'

const Categories = () => {
    const [activeBox, setActiveBox] = useState(1);

    const handleBoxPress = (boxNumber) => {
        setActiveBox(boxNumber);
    };
    return (
        <View style={styles.categories}>

            <TouchableOpacity onPress={() => handleBoxPress(1)}>
                <View style={[styles.item, activeBox === 1 ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.white }]}>
                    <CustomImage
                        source={require('../assets/images/burger.png')}
                        width={45}
                        height={45}
                        borderRadius={50}
                        bottom={5}
                        resizeMode='contain'
                    />
                    <CustomText
                        title='Burger'
                        marginTop={2}
                        {...activeBox === 1 ? { color: theme.colors.white } : { color: theme.colors.headingColors }}
                        fontSize={theme.fontSize.xsmall}
                        fontFamily={theme.fonts.medium}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBoxPress(2)}>
                <View style={[styles.item, activeBox === 2 ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.white }]}>
                    <CustomImage
                        source={require('../assets/images/donut.png')}
                        width={45}
                        height={45}
                        borderRadius={50}
                        bottom={5}
                        resizeMode='contain'
                    />
                    <CustomText
                        title='Donut'
                        marginTop={2}
                        {...activeBox === 2 ? { color: theme.colors.white } : { color: theme.colors.headingColors }}
                        fontSize={theme.fontSize.xsmall}
                        fontFamily={theme.fonts.medium}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBoxPress(3)}>
                <View style={[styles.item, activeBox === 3 ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.white }]}>
                    <CustomImage
                        source={require('../assets/images/pizzaImage.png')}
                        width={45}
                        height={45}
                        borderRadius={50}
                        bottom={5}
                        resizeMode='contain'
                    />
                    <CustomText
                        title='Pizza'
                        marginTop={2}
                        {...activeBox === 3 ? { color: theme.colors.white } : { color: theme.colors.headingColors }}
                        fontSize={theme.fontSize.xsmall}
                        fontFamily={theme.fonts.medium}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBoxPress(4)}>
                <View style={[styles.item, activeBox === 4 ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.white }]}>
                    <CustomImage
                        source={require('../assets/images/mexicanImage.png')}
                        width={45}
                        height={45}
                        borderRadius={50}
                        bottom={5}
                        resizeMode='contain'
                    />
                    <CustomText
                        title='Mexcian'
                        marginTop={2}
                        {...activeBox === 4 ? { color: theme.colors.white } : { color: theme.colors.headingColors }}
                        fontSize={10}
                        fontFamily={theme.fonts.medium}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBoxPress(5)}>
                <View style={[styles.item, activeBox === 5 ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.white }]}>
                    <CustomImage
                        source={require('../assets/images/asianImage.png')}
                        width={45}
                        height={45}
                        borderRadius={50}
                        bottom={5}
                        resizeMode='contain'
                    />
                    <CustomText
                        title='Asian'
                        marginTop={2}
                        {...activeBox === 5 ? { color: theme.colors.white } : { color: theme.colors.headingColors }}
                        fontSize={10}
                        fontFamily={theme.fonts.medium}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 3,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 58.57,
        borderRadius: 50,
        elevation: 3,
        shadowColor:theme.colors.white,
        marginBottom: 10,
        bottom:20
    },
})