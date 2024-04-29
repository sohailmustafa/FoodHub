import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
// import Home from '../src/Screens/Home'
import Details from './Notifcation'
import Icon from 'react-native-vector-icons/Octicons'
const DrawerTabNavigator = () => {
    return (
        <Drawer.Navigator>
        {/* <Drawer.Screen name="Home" component={Home} /> */}
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>
    )
}

export default DrawerTabNavigator

const styles = StyleSheet.create({})