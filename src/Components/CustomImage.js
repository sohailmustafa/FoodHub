import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomImage = (props) => {
    const styles = StyleSheet.create({
        image:{

            width:props.width ?  props.width : 90,
            height:props.height ? props.height : 70,
            resizeMode:props.resizeMode,
            borderRadius:props.borderRadius,
            borderWidth:props.borderWidth,
            borderColor:props.borderColor,
            margin:props.margin,
            backgroundColor:props.backgroundColor,
            padding:props.padding,
            paddingTop:props.paddingTop,
            paddingRight:props.paddingRight,
            paddingBottom:props.paddingBottom,
            paddingLeft:props.paddingLeft,
            top:props.top,
            bottom:props.bottom,
            left:props.left,
            right:props.right,
            margin: props.margin,
            marginTop: props.marginTop,
            marginRight: props.marginRight,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            zIndex:props.zIndex

        }

    })
  return (
    
      <View>
        <Image 
      source={props.source}
      style={styles.image} resizeMode={props.resizeMode} />
      </View>
    
  )
}

export default CustomImage

