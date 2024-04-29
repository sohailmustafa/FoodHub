import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import Fontisto from 'react-native-vector-icons/Fontisto'
import CustomImage from '../Components/CustomImage'
import CustomText from '../Components/CustomText'
import theme from '../utils/Styles'

const FastFood = () => {
    const [selectedOption, setSelectedOption] = useState();
    const data = [
        {
            id: '1', imageSource: require('../assets/images/foodPic1.png'), price:'10.35', rating: 4.5, reviews: 25, name: "Chicken Hawaiian", description: 'Chicken, Cheese and pineapple',

        },
        {
            id: '2', imageSource: require('../assets/images/pizzaImg1.png'), price:'10.35', rating: 4.5, reviews: 25, name: "Chicken Hawaiian", description: 'Chicken, Cheese and pineapple',

        },
        {
            id: '3', imageSource: require('../assets/images/foodPic1.png'), price:'10.35', rating: 4.5, reviews: 25, name: "Chicken Hawaiian", description: 'Chicken, Cheese and pineapple',

        },
        {
            id: '4', imageSource: require('../assets/images/pizzaImg1.png'), price:'10.35', rating: 4.5, reviews: 25, name: "Chicken Hawaiian", description: 'Chicken, Cheese and pineapple',

        },
        // Add more objects as needed
    ];
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/images/bgFastFood2.png')} resizeMode='cover' style={styles.bgImage}>

                <TouchableOpacity>
                    <CustomImage
                        source={require('../assets/images/back.png')}
                        width={80}
                        height={80}
                        marginTop={5}
                        borderRadius={10}
                        resizeMode='contain'
                    />

                </TouchableOpacity>

                <View>
                    <CustomText
                        title='Fast'
                        lineHeight={40}
                        color={theme.colors.black}
                        fontSize={theme.fontSize.heading}
                        fontFamily={theme.fonts.bold}
                        left={30}
                    />
                    <CustomText
                        title='Food'
                        lineHeight={45}
                        color={theme.colors.primary}
                        fontSize={theme.fontSize.heading}
                        fontFamily={theme.fonts.bold}
                        left={30}


                    />
                    <CustomText
                        title={'80 type of pizza'}
                        lineHeight={20}
                        color={theme.colors.lable}
                        fontFamily={theme.fonts.SofiaProRegular}
                        fontSize={theme.fontSize.regular}
                        letterSpacing={-0.5}
                        left={30}
                        marginBottom={10}
                    />

                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  {/* <View style={{flex:0.2}}> */}
                  <CustomText
                        title={'short'}
                        lineHeight={20}
                        color={theme.colors.black}
                        fontFamily={theme.fonts.SofiaProRegular}
                        fontSize={theme.fontSize.small}
                        letterSpacing={-0.5}
                        marginBottom={5}
                        left={40}
                    />
                    
                  {/* </View> */}
                
                {/* <Picker style={{flex:0.6, bottom:8,}}
                        selectedValue={selectedOption}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedOption(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" style={{color:theme.colors.primary,}}/>
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker> */}
                    </View>
                <View style={{ paddingHorizontal: 20, flex: 1 }}>
                    <FlatList

                        showsVerticalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <View style={styles.listView}>
                                    <ImageBackground source={item.imageSource} resizeMode='cover' style={styles.ImageView}>
                                       <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
                                       <View style={styles.ratinCard}>
                                       <Text style={{color: theme.colors.primary, fontFamily: theme.fonts.semi, fontSize: theme.fontSize.regular}}>$</Text>
                                            <Text style={styles.rating}>{item.price} </Text>
                                          
                                        </View>
                                        <View style={styles.heart}>
                                            <Fontisto name={'heart'} size={17} color='#FFF' />
                                        </View>
                                       </View>
                                        <View style={styles.ratingCard2}>
                                    <Text style={styles.rating1}>{item.rating} </Text>
                                    <Fontisto name={'star'} size={10} color='#FFC529' />
                                    <Text style={styles.reviews}> ({item.reviews}+)</Text>
                                </View>
                                    </ImageBackground>

                                    <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                                        <CustomText
                                            title={item.name}
                                            marginTop={5}
                                            fontFamily={theme.fonts.semi}
                                            fontSize={theme.fontSize.small}
                                            color={theme.colors.black}
                                        />

                                    </View>
                                    <CustomText
                                        title={item.description}
                                        lineHeight={20}
                                        color={theme.colors.lable}
                                        fontFamily={theme.fonts.SofiaProRegular}
                                        fontSize={theme.fontSize.regular}
                                        letterSpacing={-0.5}
                                        left={10}

                                    />

                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ImageBackground>

        </View>
    )
}

export default FastFood

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.colors.screenBackBgColor
    },
    bgImage: {
        flex: 1
    },
    listView: {
        backgroundColor: theme.colors.white,
        height: 237,
        width: '100%',
        borderRadius: 15,
        marginVertical: 10,
        marginRight: 0,
    },
    ImageView: {

        width: '100%',
        height: 165.14,
        overflow: 'hidden',
        borderRadius: 15,
       
    },
    ratinCard: {
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        width: 90,
        height: 40,
        left: 10,
        top: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,

    },
    rating: {
        color: theme.colors.black,
        fontFamily: theme.fonts.semi,
        fontSize: theme.fontSize.regular
    },
    reviews: {
        color: theme.colors.lable,
        fontFamily: theme.fonts.regular,
        fontSize: theme.fontSize.xsmall
    },
    ratingCard2: {
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        width: 80,
        height: 30,
        left: 10,
        top: 90,
       
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    rating1: {
        color: theme.colors.black,
        fontFamily: theme.fonts.semi,
        fontSize: theme.fontSize.xsmall
    },
    heart: {
        backgroundColor: '#FE724C',
        width: 35,
        height: 35,
        top: 15,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    featuredProduct: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})