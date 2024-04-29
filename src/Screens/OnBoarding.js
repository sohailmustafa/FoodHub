// import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
// import React from 'react'
// import AppIntroSlider from 'react-native-app-intro-slider';
// import theme from '../utils/Styles';
// const { height, width } = Dimensions.get('screen')

// const Slides = [{ img: require('../assets/images/img1.png'), title: 'Order Food Now', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' }, { img: require('../assets/images/img2.png'), title: 'Easy Payment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },{ img: require('../assets/images/img3.png'), title: 'Fast Delivery', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },]


// const OnBoarding = ({ navigation }) => {
//     const onSkip = () => {
//         navigation.navigate('GetStarted')
//     }

//     return (

//         <View style={styles.container}>

//             <AppIntroSlider
//                 data={Slides}
//                 bottomButton 
//                 showPrevButton={false}
//                 showSkipButton={false}
//                 onDone={() => {
//                     navigation.navigate('Login')
//                 }}


//                 dotStyle={{ backgroundColor: theme.colors.gray, opacity: 0.2, height: 5,width: 5,bottom:60}}
//                 activeDotStyle={{ backgroundColor:theme.colors.lightGreen, height: 5, width: 30,bottom:60 }}
//                 skipButton={{ backgroundColor: 'red' }}

//                 renderItem={({ item, index }) => {
//                     return (

//                         <View style={styles.container}>
//                             {/* <View style={styles.skipButton}><Text style={styles.skipText} onPress={onSkip}>Skip</Text></View> */}
//                            <View style ={styles.imageBox}>
//                            <Image resizeMode='contain' source={item.img} style={styles.docImage} />
//                            </View>
//                             <View style={styles.ddetailsBox}>
//                             <Text style={styles.heading}>{item.title}</Text>
//                                 <Text style={styles.desText}>{item.description}</Text>
//                             </View>
                            

//                         </View>
//                     )
//                 }}

//                 renderNextButton={() => {
//                     return (
//                         <View style={styles.btnView}>
//                             <Text style={styles.btnText}>Next</Text>
//                         </View>
//                     )
//                 }}
//                 renderDoneButton={() => {
//                     return (
//                         <View style={styles.btnView}>
//                         <Text style={styles.btnText}>Next</Text>
//                     </View>
//                     )
//                 }}
//                 renderPrevButton={() => {
//                     return (
//                         <View style={{ backgroundColor: '#199A8E', padding: 8, borderRadius: 20 }}>

//                         </View>
//                     )
//                 }}

//             />
//         </View>
//     )
// }

// export default OnBoarding

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: theme.colors.primary,
//         paddingHorizontal: 10,
//         justifyContent:'center'

//     },
//     skipButton: {
//         alignSelf: 'flex-end',
//         paddingRight: width * 0.01,
//         paddingTop: height * 0.05,


//     },
//     skipText: {
//         fontSize: theme.fontSize.regular,
//         fontWeight: '600',
//         color: theme.colors.white
//     },
//     docImage: {
//         width: '100%',
//         height: 300,
//         // backgroundColor: 'red'


//     },
//     imageBox:{
//         flex:1.1,
//         //  backgroundColor:'red',
//          justifyContent:'center'
//     },
//     ddetailsBox: {
//         // backgroundColor:'green',
//         flex:0.9,
//         alignItems: 'center',
//         paddingTop:10,
        

//     },
//     heading: {
//         bottom:20,
//         fontFamily: theme.fonts.medium,
//         fontSize: theme.fontSize.mediumHeading,
//         color: theme.colors.lightGreen,
        
//     },
//     desText:{
       
//         color:theme.colors.white,
//         fontSize:theme.fontSize.miniHeading,
//         fontFamily:theme.fonts.medium,
//     },
//     btnView:{
      
//         bottom:30,
//         backgroundColor:theme.colors.lightGreen, 
//         height:50, 
//         borderRadius: 50, 
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     btnText:{
//          color:theme.colors.white,
//          fontSize:14,
//          fontFamily:theme.fonts.medium
//     },
    

// })


// // import React from 'react';
// // import {View, Text,Image,StyleSheet,StatusBar,SafeAreaView,} from 'react-native';
// // import AppIntroSlider from 'react-native-app-intro-slider';
// // import theme from '../utils/Styles'

// //  const data = [{ img: require('../assets/images/img1.png'), description: 'Order for Food' }, { img: require('../assets/images/img2.png'), description: 'Order for Food' },]

// // export default class App extends React.Component {
    
// //   _renderItem = ({item}) => {
// //     return (
// //       <View
// //         style={{
// //           flex: 1,
// //         //   backgroundColor: item.bg,
// //         }}>
// //         <SafeAreaView style={styles.slide}>
          
// //           <Image source={item.img} style={styles.image} />
// //           <Text style={styles.title}>{item.description}</Text>
// //         </SafeAreaView>
// //       </View>
// //     );
// //   };

// //   _keyExtractor = (item) => item;

// //   render() {
// //     return (
// //       <View style={{flex: 1}}>
// //         <StatusBar translucent backgroundColor="transparent" />
// //         <AppIntroSlider
// //           keyExtractor={this._keyExtractor}
// //           renderItem={this._renderItem}
// //           bottomButton ={{backgroundColor:theme.colors.lightGreen, color:'red'}}
// //           dotStyle={{ backgroundColor: '#199A8E', opacity: 0.2, height: 5, }}
// //           activeDotStyle={{ backgroundColor: '#199A8E', height: 5, width: 15 }}
// //           data={data}
// //         />
// //       </View>
      
// //     );
// //   }
// // }


// // const styles = StyleSheet.create({
// //     slide: {
// //       flex: 1,
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       backgroundColor: theme.colors.primary,
// //     },
// //     image: {
// //       width: 320,
// //       height: 320,
// //       marginTop: 32,
// //     },
// //     title: {
// //       fontSize: 22,
// //       color: 'white',
// //       textAlign: 'center',
// //     },
// //   });
  import { StyleSheet, Text, View } from 'react-native'
  import React from 'react'
  
  const OnBoarding = () => {
    return (
      <View>
        <Text>OnBoarding</Text>
      </View>
    )
  }
  
  export default OnBoarding
  
  const styles = StyleSheet.create({})