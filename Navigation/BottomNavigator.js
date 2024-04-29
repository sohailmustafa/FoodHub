import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../src/Screens/Home'
import Details from './Notifcation'
import Icon from 'react-native-vector-icons/Octicons'
import theme from '../src/utils/Styles'
import CustomImage from '../src/Components/CustomImage'
import Cart from '../src/Screens/Cart'
import Favorites from '../src/Screens/Favorites'
import Notifcation from './Notifcation'
import Location from './Location'
import CustomText from '../src/Components/CustomText'
const Bottom = createBottomTabNavigator()
const BottomNavigator = () => {
  return (
    <Bottom.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: 'green', tabBarStyle: { backgroundColor: theme.colors.white, height: 60 }, tabBarInactiveTintColor: 'grey', tabBarShowLabel: false, headerShown: false }}>
      <Bottom.Screen options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <CustomImage
                source={focused ? require('../src/assets/icons/home0.png') : require('../src/assets/icons/home1.png')}
                width={27}
                height={27}
                resizeMode='contain'
              // marginTop={2}
              />

            </View>
          );
        },
      }} name='Home' component={Home} />
      <Bottom.Screen options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <CustomImage
                source={focused ? require('../src/assets/icons/loc0.png') : require('../src/assets/icons/loc1.png')}
                width={22}
                height={22}
                resizeMode='contain'
              />

            </View>
          );
        },
      }} name='Location' component={Location} />
      <Bottom.Screen options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 7 }}>
              <CustomImage
                source={focused ? require('../src/assets/icons/cart0.png') : require('../src/assets/icons/cart1.png')}
                width={22}
                height={22}
                resizeMode='contain'
              />
              <View style={styles.badge}>
                <CustomText
                  title={'2'}
                  color={theme.colors.white}
                  textAlign='center'
                  fontSize={10}
                />
              </View>
            </View>

          );
        },
      }} name='Cart' component={Cart} />
      <Bottom.Screen options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <CustomImage
                source={focused ? require('../src/assets/icons/heart0.png') : require('../src/assets/icons/heart1.png')}
                width={22}
                height={22}
                resizeMode='contain'


              />

            </View>
          );
        },
      }} name='Favorites' component={Favorites} />
      <Bottom.Screen options={{
        tabBarIcon: ({ focused }) => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center',  top: 7 }}>
              <CustomImage
                source={focused ? require('../src/assets/icons/notification0.png') : require('../src/assets/icons/notification1.png')}
                width={22}
                height={22}
                resizeMode='contain'

              />
              <View style={styles.badge}>
                <CustomText
                  title={'6'}
                  color={theme.colors.white}
                  textAlign='center'
                  fontSize={10}
                />
              </View>
            </View>
          );
        },
      }} name='Notifcation' component={Notifcation} />



    </Bottom.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({
  badge: {
    width: 16,
    height: 16,
    backgroundColor: '#FFC529',
    bottom: 33,
    left: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

  }
})