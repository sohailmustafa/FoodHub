import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomImage from '../Components/CustomImage'
import CustomText from '../Components/CustomText'
import Entypo from 'react-native-vector-icons/Entypo'
import theme from '../utils/Styles'
import { ScrollView } from 'react-native-gesture-handler';

const Cart = () => {
    const data = [{ img: require('../assets/images/PizzaHut.png'), title: 'Ren n hot Pizza', description: 'Spicy chicken, beef', price: '15.30' }, { img: require('../assets/images/greekSalad.png'), title: 'Greek Salad', description: 'Spicy Salad, Healthy', price: '12.00' }, ]
    const [count, setCount] = useState(0);
    const handleMinusPress = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0)); // Ensure count doesn't go below zero
    };
    const handlePlusPress = () => {
        setCount(prevCount => prevCount + 1);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 0.2 }}>
                    <TouchableOpacity>
                        <CustomImage
                            source={require('../assets/images/back.png')}
                            width={80}
                            height={80}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.6, }}>
                    <CustomText
                        title={'Cart'}
                        color={theme.colors.black}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.smallHeading}
                        textAlign={'center'}
                        top={12}


                    />
                </View>
                <View style={{ flex: 0.2 }}></View>

            </View>

            <View>
                <FlatList

                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.CartItem}>
                            <View style={{ flex: 0.25, }}>
                                <CustomImage
                                    source={item.img}
                                    resizeMode='cover'
                                    width={82}
                                    height={82}
                                    borderRadius={20}
                                />
                            </View>
                            <View style={{ flex: 0.52, paddingLeft: 7 }}>
                                <CustomText
                                    title={item.title}
                                    color={theme.colors.black}
                                    fontFamily={theme.fonts.semi}
                                    fontSize={theme.fontSize.smallHeading}

                                />
                                <CustomText
                                    title={item.description}
                                    color={theme.colors.lable}
                                    fontFamily={theme.fonts.SofiaProRegular}
                                    fontSize={theme.fontSize.regular2}

                                />
                                <CustomText
                                    title={'$' + item.price}
                                    color={theme.colors.primary}
                                    fontFamily={theme.fonts.semi}
                                    fontSize={theme.fontSize.small}
                                    marginTop={5}
                                />
                            </View>

                            <View style={{ flex: 0.23, backgroundColor: 'greens', justifyContent: 'space-between' }}>
                                <View>
                                    <TouchableOpacity style={{ alignSelf: 'flex-end' }} >
                                        <View style={{ width: 22, height: 22, justifyContent: 'center', alignItems: 'center' }}>
                                            <AntDesign name={'close'} size={18} color={theme.colors.primary} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                                    <TouchableOpacity
                                        onPress={handleMinusPress}
                                        style={{
                                            backgroundColor: theme.colors.white,
                                            borderWidth: 1,
                                            borderRadius: 50,
                                            borderColor: theme.colors.primary,

                                        }}
                                    >
                                        <View style={{ width: 22, height: 22, justifyContent: 'center', alignItems: 'center' }}>
                                            <Entypo name={'minus'} size={18} color={theme.colors.primary} />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center' }}>
                                        <CustomText
                                            title={count}
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
                                        <View style={{ width: 22, height: 22, justifyContent: 'center', alignItems: 'center' }}>
                                            <Entypo name={'plus'} size={18} color={theme.colors.white} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>

           <ScrollView>
           <View style={styles.TotalAmountBill}>
                <CustomText
                    title={'Subtotal'}
                    color={theme.colors.black}
                    fontFamily={theme.fonts.SofiaProRegular}
                    fontSize={theme.fontSize.small}
                    marginTop={10}
                    marginBottom={10}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <CustomText
                        title='$27.30'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.small}
                        marginTop={10}
                        marginBottom={10}
                    />
                    <CustomText
                        title=' USD'
                        color={theme.colors.lable}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.regular}
                        marginTop={11}
                        marginBottom={10}
                    />
                </View>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.TotalAmountBill}>
                <CustomText
                    title={'Tax and Fees'}
                    color={theme.colors.black}
                    fontFamily={theme.fonts.SofiaProRegular}
                    fontSize={theme.fontSize.small}
                    marginTop={10}
                    marginBottom={10}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <CustomText
                        title='$5.30'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.small}
                        marginTop={10}
                        marginBottom={10}
                    />
                    <CustomText
                        title=' USD'
                        color={theme.colors.lable}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.regular}
                        marginTop={11}
                        marginBottom={10}
                    />
                </View>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.TotalAmountBill}>
                <CustomText
                    title={'Delivery'}
                    color={theme.colors.black}
                    fontFamily={theme.fonts.SofiaProRegular}
                    fontSize={theme.fontSize.small}
                    marginTop={10}
                    marginBottom={10}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <CustomText
                        title='$1.00'
                        color={theme.colors.black}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.small}
                        marginTop={10}
                        marginBottom={10}
                    />
                    <CustomText
                        title=' USD'
                        color={theme.colors.lable}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.regular}
                        marginTop={11}
                        marginBottom={10}
                    />
                </View>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.TotalAmountBill}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <CustomText
                        title={'Total'}
                        color={theme.colors.black}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.small}
                        marginTop={10}
                        marginBottom={10}
                    />
                    <CustomText
                        title=' (2 Items)'
                        color={theme.colors.lable}
                        fontFamily={theme.fonts.regular}
                        fontSize={theme.fontSize.regular2}
                        marginTop={11}
                        marginBottom={10}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <CustomText
                        title={'$35.00'}
                        color={theme.colors.black}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.small}
                        marginTop={10}
                        marginBottom={10}
                    />
                    <CustomText
                        title=' USD'
                        color={theme.colors.lable}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.regular}
                        marginTop={11}
                        marginBottom={10}
                    />
                </View>
            </View>

            <TouchableOpacity style={{alignSelf:'center', marginTop:10}}>
                <View style={styles.addToCart}>
               
                    <CustomText
                    title='CHECKOUT'
                    color={theme.colors.white}
                        fontFamily={theme.fonts.medium}
                        fontSize={theme.fontSize.regular2}
                       
                    />
                    </View>
                </TouchableOpacity>
           </ScrollView>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.colors.screenBackBgColor,
        paddingBottom:10

    },
    header: {
        flexDirection: 'row',
    },
    CartItem: {
        marginHorizontal: 15,
        justifyContent: 'space-between',
        // backgroundColor: 'pink',
        height: 83.28,
        flexDirection: 'row',
        marginBottom: 15
    },
    TotalAmountBill: {
        paddingHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'red'
    },
    horizontalLine: {
        marginHorizontal: 15,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderColor: theme.colors.lable
    },
    addToCart:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.colors.primary,
        flexDirection:'row',
        borderRadius:50,
        marginTop:10,
        width:167,
        height:53
    }

})