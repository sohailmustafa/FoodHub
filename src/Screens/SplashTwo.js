import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
const SplashTwo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/bg.png')} style={styles.bgImage} resizeMode='cover'>
      <LinearGradient colors={['rgba(73, 77, 99 , 0)', 'rgba(25, 27, 47 ,1)']} style={styles.linearGradient}>
 
          <View style={{ top: 110, flex: 0.95 }}>
            <CustomText
              title='Welcome to!'
              lineHeight={40}
              color={theme.colors.black}
              fontSize={theme.fontSize.heading}
              fontFamily={theme.fonts.bold}
              left={30}
            />
            <CustomText
              title='FoodHub'
              lineHeight={45}
              color={theme.colors.primary}
              fontSize={theme.fontSize.heading}
              fontFamily={theme.fonts.bold}
              left={30}


            />

            <CustomText
              title={'Your favourite foods delivered\nfast at your door.'}
              color={theme.colors.light}
              fontSize={theme.fontSize.smallHeading}
              fontFamily={theme.fonts.SofiaProRegular}
              marginTop={10}
              paddingLeft={30}
              letterSpacing={-0.2}

            />
          </View>
          <View style={styles.line}>
            <View style={styles.horizontalLine} />
            <Text style={styles.orText}>sign in with</Text>
            <View style={styles.horizontalLine} />
          </View>


        <TouchableOpacity>
        <View style={styles.body}>
            <View>
              <CustomImage
                source={require('../assets/icons/google.png')}
                widyh={30}
                height={30}
                left={10}
                resizeMode='contain'

              />
            </View>
            <View>
              <CustomText
                title='Sign In with Google'
                color={theme.colors.black}
                textAlign='center'
                height={50}
                fontSize={theme.fontSize.small}
                fontFamily={theme.fonts.medium}
                paddingTop={10}
              

              />
            </View>
          </View>
        </TouchableOpacity>


          <CustomButton
            title='Start with email or phone'
            textAlign='center'
            height={50}
            color={theme.colors.white}
            fontSize={theme.fontSize.small}
            fontFamily={theme.fonts.medium}
            paddingTop={10}
            borderWidth={0.54}
            marginTop={10}
            marginHorizontal={20}
            borderRadius={50}
            borderColor={theme.colors.white}
            backgroundColor ={'rgba(255, 255, 255, 0.15)'}
            onPress={() => navigation.navigate('SignUp')}

          />
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
            <CustomText
              title={'Already have an account?'}
              color={theme.colors.white}
              textAlign='center'
              fontSize={theme.fontSize.regularSmall}
              fontFamily={theme.fonts.medium}
              marginTop={10}
              

            />
           <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
           <CustomText
              title={'  Sign In'}
              color={theme.colors.primary}
              textAlign='center'
              fontSize={theme.fontSize.regularSmall}
              fontFamily={theme.fonts.medium}
              marginTop={10}
              

            />
           </TouchableOpacity>
          </View>

</LinearGradient>

      </ImageBackground>
    </View>
  )
}

export default SplashTwo

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,

  },
  linearGradient: {
    flex: 1,
    paddingVertical: 10
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 25,

  },
  horizontalLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)'
  },
  orText: {
    marginHorizontal: 20,
    bottom:2,
    fontFamily:theme.fonts.medium,
    fontSize:theme.fontSize.regular,
    color: 'white',
  },
  body: {
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    borderRadius: 50,
    marginBottom:5
  }

})
