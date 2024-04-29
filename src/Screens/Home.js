import { StyleSheet, View, ScrollView, TouchableOpacity, } from 'react-native'
import theme from '../utils/Styles'
import Feather from 'react-native-vector-icons/Feather'
import CustomText from '../Components/CustomText'
import CustomInput from '../Components/CustomInput'
import FeaturedRestaurants from '../Components/FeaturedRestaurants'
import Categories from '../Components/Categories'
import PopularItems from '../Components/PopularItems'
import Header from '../Components/Header'
import CustomImage from '../Components/CustomImage'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({ navigation }) => {
    const [img, setImg] = useState('');
    useEffect(() => {
        (async () => {
            await getUserData();
        })();
    }, []);
    
    const getUserData = async () => {
        try {
            // Get user data from AsyncStorage
            const userDataJSON = await AsyncStorage.getItem('userData');
    
            if (userDataJSON) {
                try {
                    const userData = JSON.parse(userDataJSON);
                    // Update state only if the component is still mounted
                    setImg(userData.profileImage || require('../assets/images/ProfileImg.png'));

                } catch (error) {
                    console.error('Error parsing user data:', error);
                }
            } else {
                // If no user data found, set a default image
                setImg('');
                console.log('No user data found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error retrieving user data:', error);
        }
    };
    
    return (
        <View style={styles.container}>

            <Header
                title={'Deliver to'}
                location={'4102 Pretty View Lane'}
                img={require('../assets/images/userProfile.png')}
                onPressprofile={() => navigation.navigate('Profile')}

            />
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 10 }}>
                    <CustomText
                        title={'What would you like to order'}
                        lineHeight={30}
                        marginTop={10}
                        color={theme.colors.headingColors}
                        fontSize={theme.fontSize.mediumHeading}
                        fontFamily={theme.fonts.bold}

                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={styles.searchView}>
                        <View style={styles.iconView}>
                            <Feather name={'search'} size={22} color={'#9AA0B4'} />
                        </View>
                        <View style={styles.inputViw}>
                            <CustomInput

                                color={theme.colors.headingColors}
                                placeholder='Find for food or restaurant...'
                                placeholderTextColor={'#9AA0B4'}
                                fontSize={theme.fontSize.regular2}
                            />
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                            <CustomImage
                                source={require('../assets/icons/filter0.png')}
                                width={70}
                                height={115}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <Categories />


                <FeaturedRestaurants
                    onPress={() => navigation.navigate('Details')}
                />

                <PopularItems
                    onPress={() => navigation.navigate('FastFood')} />



            </ScrollView>
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: theme.colors.screenBackBgColor
    },

    searchView: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        top: 0,
        height: 55,
        marginTop: 15,
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.borderColors,
        marginBottom: 10
    },
    iconView: {
        flex: 0.12,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 5

    },
    inputViw: {
        flex: 0.88,
        justifyContent: 'center',


    },


})