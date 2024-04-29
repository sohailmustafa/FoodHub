import { StyleSheet, View, Dimensions } from 'react-native'

import CustomImage from "../Components/CustomImage"
import theme from '../utils/Styles'
const { height, width } = Dimensions.get('screen')
const Splash = () => {
  return (
    <View style={styles.container}>
      <CustomImage
        source={require('../assets/images/logo.png')}
        width={200}
        height={200}
        resizeMode={'contain'}
      />
     
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary
  },

})
export default Splash