// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import Splash from './src/Screens/Splash'
// import SplashTwo from './src/Screens/SplashTwo'
// import SignUp from './src/Screens/SignUp'
// import Login from './src/Screens/Login'
// import ForgetPassword from './src/Screens/ForgetPassword'
// import VefificationCode from './src/Screens/VefificationCode'
// import Home from './src/Screens/Home'
// import Details from './src/Screens/Details'
// import FastFood from './src/Screens/FastFood'
// import Cart from './src/Screens/Cart'
// import Favorites from './src/Screens/Favorites'
// import Profile from './src/Screens/Profile'
// import Address from './src/Screens/Address'
// import RatingPage from './src/Screens/RatingPage'
// import ReviewResturent from './src/Screens/ReviewResturent'
// import PhoneRegistration from './src/Screens/PhoneRegistration'

// const App = () => {
//   return (
//     // <Splash/>
//     // <SplashTwo/>
//     // <SignUp/>
//     // <Login/>
//     // <ForgetPassword/>
//     // <VefificationCode/>
//     // <Home/>
//     // <Details/>
//     // <FastFood/>
//     // <Cart/>
//     // <Favorites/>
//     // <Profile/>
//     // <Address/>
//     // <RatingPage/>
//     // <ReviewResturent/>
//     // <PhoneRegistration/>

//   )
// }

// export default App

// const styles = StyleSheet.create({})



import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import BottomNavigator from './Navigation/BottomNavigator';
import Splash from './src/Screens/Splash';
import SignUp from './src/Screens/SignUp';
import Login from './src/Screens/Login';
import SplashTwo from './src/Screens/SplashTwo';
import Home from './src/Screens/Home';
import ForgetPassword from './src/Screens/ForgetPassword';
import Details from './src/Screens/Details';
import Cart from './src/Screens/Cart';
import Profile from './src/Screens/Profile';
import FastFood from './src/Screens/FastFood';
import { Provider } from 'react-redux';
// import firestore from '@react-native-firebase/firestore';


const Stack = createStackNavigator();
const App = () => {

  //<!-------Navigation--------!>
  const [splash, showSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      showSplash(false)
    }, 3000)
  }, [])


  return (

<Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {splash ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : (
          <>
        
           <Stack.Screen name="SplashTwo" component={SplashTwo} />
            <Stack.Screen name="SignIn" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="FastFood" component={FastFood} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="BottomTabs" component={BottomNavigator} />
            
          </>
        )}
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
