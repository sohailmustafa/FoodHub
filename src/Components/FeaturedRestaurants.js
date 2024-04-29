import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import theme from '../utils/Styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CustomImage from '../Components/CustomImage'
import CustomText from '../Components/CustomText'



const FeaturedRestaurants = (props) => {
    const [favorite, setFavorite]  = useState(false)
    const handleFavoritePress = () => {
        setFavorite(!favorite);
    };
    const data = [
        {
          id: '1', imageSource: require('../assets/images/foodPic1.png'), rating: 4.5, reviews: 25, restaurantName: "Mc Donald's",
          deliveryIcon: require('../assets/icons/delivery_icon.png'), freeDeliveryText: 'Free delivery',
          timeIcon: require('../assets/icons/time_icon.png'), deliveryTime: '10-15 mins', tags: ['BURGER', 'CHICKEN', 'FAST FOOD']
        },
        {
            id: '2', imageSource: require('../assets/images/foodPic2.png'), rating: 4.7, reviews: 99, restaurantName: "Starbuck",
            deliveryIcon: require('../assets/icons/delivery_icon.png'), freeDeliveryText: 'Free delivery',
            timeIcon: require('../assets/icons/time_icon.png'), deliveryTime: '10-15 mins', tags: ['BURGER', 'CHICKEN', 'FAST FOOD']
          },
        // Add more objects as needed
      ];
    return (
        <View>
            <View style={styles.featuredProduct}>
                <CustomText
                    title='Featured Restaurants'
                    marginTop={5}
                    fontFamily={theme.fonts.semi}
                    fontSize={theme.fontSize.small}
                    color={theme.colors.headingColors}
                />
                <TouchableOpacity>
                    <CustomText
                        title='View all'
                        marginTop={5}
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
                        <TouchableOpacity onPress={props.onPress}>
                        <View style={styles.listView}>
                        <ImageBackground source={item.imageSource} resizeMode='cover' style={styles.ImageView}>
                                <View style={styles.ratinCard}>
                                    <Text style={styles.rating}>{item.rating} </Text>
                                    <Fontisto name={'star'} size={12} color='#FFC529' />
                                    <Text style={styles.reviews}> ({item.reviews}+)</Text>
                                </View>
                               <TouchableOpacity onPress={handleFavoritePress}>
                               <View style={{ ...styles.heart, backgroundColor: favorite ? '#FE724C' : 'rgba(255,255,255, 0.3)' }}>
                                    <Fontisto name={'heart'} size={17} color='#FFF' />
                                </View>
                               </TouchableOpacity>
                            </ImageBackground>

                            <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                                <CustomText
                                    title={item.restaurantName}
                                    marginTop={5}
                                    fontFamily={theme.fonts.semi}
                                    fontSize={theme.fontSize.small}
                                    color={theme.colors.black}
                                />
                                <CustomImage
                                    source={require('../assets/icons/tick.png')}
                                    resizeMode='contain'
                                    width={11}
                                    height={11}
                                    top={15}
                                    left={5}
                                />
                            </View>
                            <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                                <CustomImage
                                    source={require('../assets/icons/delivery_icon.png')}
                                    resizeMode='contain'
                                    width={18}
                                    height={18}
                                    top={4}
                                    left={0}
                                />
                                <CustomText
                                    title="Free delivery"
                                    marginTop={6}
                                    fontFamily={theme.fonts.regular}
                                    fontSize={theme.fontSize.regularSmall}
                                    color={theme.colors.icontext}
                                    left={5}
                                />
                                <CustomImage
                                    source={require('../assets/icons/time_icon.png')}
                                    resizeMode='contain'
                                    width={15}
                                    height={15}
                                    top={6}
                                    left={12}
                                />
                                <CustomText
                                    title="10-15 mins"
                                    marginTop={6}
                                    fontFamily={theme.fonts.regular}
                                    fontSize={theme.fontSize.regularSmall}
                                    color={theme.colors.icontext}
                                    left={15}
                                />

                            </View>

                            <View style={{ paddingLeft: 5, flexDirection: 'row', marginBottom: 10 }}>
                                <CustomText
                                    title="BURGER"
                                    marginTop={8}
                                    fontFamily={theme.fonts.regular}
                                    fontSize={theme.fontSize.regularSmall}
                                    color={theme.colors.icontext}
                                    left={5}
                                    backgroundColor='#F6F6F6'
                                    padding={5}
                                    borderRadius={5}
                                />
                                <CustomText
                                    title="CHICKEN"
                                    marginTop={8}
                                    fontFamily={theme.fonts.regular}
                                    fontSize={theme.fontSize.regularSmall}
                                    color={theme.colors.icontext}
                                    left={13}
                                    backgroundColor='#F6F6F6'
                                    padding={5}
                                    borderRadius={5}
                                />
                                <CustomText
                                    title="FAST FOOD"
                                    marginTop={8}
                                    fontFamily={theme.fonts.regular}
                                    fontSize={theme.fontSize.regularSmall}
                                    color={theme.colors.icontext}
                                    left={20}
                                    backgroundColor='#F6F6F6'
                                    padding={5}
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

export default FeaturedRestaurants

const styles = StyleSheet.create({

    listView: {
        backgroundColor: theme.colors.white,
        height: 237,
        width: 260,
        borderRadius: 15,
        marginVertical: 10,
        marginRight:15
    },
    ImageView: {

        width: 260,
        height: 136,
        overflow: 'hidden',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
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
    heart: {
       
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