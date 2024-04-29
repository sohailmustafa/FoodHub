import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import theme from '../utils/Styles'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomImage from '../Components/CustomImage'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'

const PopularItems = (props) => {
    const data = [
        {
            id: '1', imageSource: require('../assets/images/SalmonSalad.png'), price: '5.50', rating: 4.5, reviews: 45, foodName: "Salmon Salad", details: 'Baked Salmon Fish'
        },
        {
            id: '2', imageSource: require('../assets/images/Pizza.png'), price: '8.20', rating: 4.7, reviews: 28, foodName: "Pizza", details: 'Chicken Supreme'
        },
        // Add more objects as needed
    ];

    return (
        <View>
            <View style={styles.offer}>
                <CustomText
                    title='Popular Items'
                    fontFamily={theme.fonts.semi}
                    fontSize={theme.fontSize.small}
                    color={theme.colors.headingColors}
                />
                <TouchableOpacity onPress = {props.onPress}>
                    <CustomText
                        title='View all'
                        fontFamily={theme.fonts.SofiaProRegular}
                        fontSize={theme.fontSize.small}
                        color={theme.colors.primary}
                    />
                </TouchableOpacity>
            </View>
            <FlatList

                horizontal
                showsHorizontalScrollIndicator={false}

                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.listView}>
                            <ImageBackground source={item.imageSource} resizeMode='cover' style={styles.ImageView}>
                                <View style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row'
                                }}>
                                    <View style={styles.ratinCard}>
                                        <Text style={styles.rating}>${item.price}</Text>

                                    </View>
                                    <View style={styles.heart}>
                                        <Fontisto name={'heart'} size={17} color='#FFF' />
                                    </View>
                                </View>
                                <View style={styles.ratinCard2}>
                                    <Text style={styles.rating1}>{item.rating} </Text>
                                    <Fontisto name={'star'} size={10} color='#FFC529' />
                                    <Text style={styles.reviews}> ({item.reviews}+)</Text>
                                </View>
                            </ImageBackground>

                            <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                                <CustomText
                                    title={item.foodName}
                                    marginTop={5}
                                    fontFamily={theme.fonts.semi}
                                    fontSize={theme.fontSize.small}
                                    color={theme.colors.black}
                                />

                            </View>

                            <View style={{ paddingLeft: 10, flexDirection: 'row', marginBottom: 10 }}>
                                <CustomText
                                    title={item.details}
                                    marginTop={5}
                                    fontFamily={theme.fonts.regular}
                                    fontSize={theme.fontSize.regularSmall}
                                    color={theme.colors.icontext}
                                    borderRadius={5}
                                />

                            </View>
                        </View>

                    </TouchableOpacity>

                )}

            />
        </View>

    )
}

export default PopularItems

const styles = StyleSheet.create({
    offer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listView: {
        backgroundColor: theme.colors.white,
        width: 155,
        height: 216,
        borderRadius: 15,
        marginVertical: 10,
        marginRight: 15



    },
    ImageView: {

        width: 155,
        height: 147.36,
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    ratinCard: {
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        width: 55,
        height: 35,
        left: 10,
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,

    },
    ratinCard2: {
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        width: 70,
        height: 30,
        left: 10,
        top: 75,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    rating: {
        color: theme.colors.black,
        fontFamily: theme.fonts.semi,
        fontSize: theme.fontSize.regular
    },
    rating1: {
        color: theme.colors.black,
        fontFamily: theme.fonts.semi,
        fontSize: theme.fontSize.xsmall
    },
    reviews: {
        color: theme.colors.lable,
        fontFamily: theme.fonts.regular,
        fontSize: 10
    },
    heart: {
        backgroundColor: '#FE724C',
        width: 28,
        height: 28,
        top: 15,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },

})