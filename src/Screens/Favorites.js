import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import theme from '../utils/Styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CustomImage from '../Components/CustomImage'
import CustomText from '../Components/CustomText'

const Favorites = () => {
    const [activeBox, setActiveBox] = useState(1);

    const handleBoxPress = (boxNumber) => {
        setActiveBox(boxNumber);
    };
    const data = [
        {
            id: '1', imageSource: require('../assets/images/foodPic1.png'), price: '10.35', rating: 4.5, reviews: 25, name: "Chicken Hawaiian", description: 'Chicken, Cheese and pineapple',

        },
        {
            id: '2', imageSource: require('../assets/images/pizzaImg1.png'), price: '10.35', rating: 4.5, reviews: 25, name: "Chicken Hawaiian", description: 'Chicken, Cheese and pineapple',

        },
        {
            id: '3', imageSource: require('../assets/images/foodPic1.png'), price: '10.35', rating: 4.5, reviews: 25, name: "Chicken Hawaiian", description: 'Chicken, Cheese and pineapple',

        },
        {
            id: '4', imageSource: require('../assets/images/pizzaImg1.png'), price: '10.35', rating: 4.5, reviews: 25, name: "Chicken Hawaiian", description: 'Chicken, Cheese and pineapple',

        },
        // Add more objects as needed
    ];
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
                    <View style={styles.box1}>
                        <CustomImage
                            source={require('../assets/images/bar.png')}
                            width={20}
                            height={20}
                            resizeMode='contain'
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.location}>
                    <CustomText
                        title='Favorites'
                        top={5}
                        fontFamily={theme.fonts.SofiaProRegular}
                        fontSize={theme.fontSize.subHeading}
                        color={theme.colors.black}
                    />

                </View>

                <TouchableOpacity>
                    <View style={styles.box}>

                        <CustomImage
                            source={require('../assets/images/userProfile.png')}
                            width={40}
                            height={40}
                            borderRadius={10}
                            resizeMode='contain'
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.doubleButton}>
                <TouchableOpacity style={{ alignItems:'center', justifyContent:'center'}} onPress={() => handleBoxPress(1)}>
                        <CustomText
                            title='Food Items'
                            { ...activeBox === 1 ?  {color : theme.colors.white} : {color:theme.colors.primary} }
                            fontFamily={theme.fonts.semi}
                            fontSize={theme.fontSize.regular2}
                            { ...activeBox === 1 ?  {backgroundColor : theme.colors.primary} : {backgroundColor:theme.colors.screenBackBgColor} }
                            width={160}
                            height={50}
                            paddingTop={13}
                            textAlign='center'
                            borderRadius={50}

                        />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems:'center', justifyContent:'center'}} onPress={() => handleBoxPress(2)}>
                        <CustomText
                            title='Resturents'
                            { ...activeBox === 2 ?  {color : theme.colors.white} : {color:theme.colors.primary} }
                            fontFamily={theme.fonts.semi}
                            fontSize={theme.fontSize.regular2}
                            { ...activeBox === 2 ?  {backgroundColor : theme.colors.primary} : {backgroundColor:theme.colors.screenBackBgColor} }
                            width={160}
                            height={50}
                            paddingTop={13}
                            textAlign='center'
                            borderRadius={50}
                            justifyContent='center'

                        />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:10}}>
                <FlatList

                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={styles.listView}>
                                <ImageBackground source={item.imageSource} resizeMode='cover' style={styles.ImageView}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={styles.ratinCard}>
                                            <Text style={{ color: theme.colors.primary, fontFamily: theme.fonts.semi, fontSize: theme.fontSize.regular }}>$</Text>
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
        </View>
    )
}

export default Favorites

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
    location: {
        alignItems: 'center'
    },
    box1: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        padding: 10,
        borderRadius: 10
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
        zIndex:999,
        elevation:10,
        shadowColor:'black',
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
    doubleButton:{
        flexDirection:'row',
        justifyContent:'center',
        borderWidth:1,
        padding:2,
        marginTop:10,
        marginBottom:10,
        borderRadius:50,
        height:55,
        borderColor:theme.colors.borderColors
    }

})