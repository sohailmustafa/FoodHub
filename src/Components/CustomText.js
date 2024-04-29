import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../utils/Styles'
const CustomText = (props) => {

    const styles = StyleSheet.create({
      
        text: {
            backgroundColor: props.backgroundColor,
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            color: props.color,
            textAlign: props.textAlign,
            lineHeight: props.lineHeight,
            textDecorationLine: props.textDecorationLine,
            textTransform: props.textTransform,
            letterSpacing: props.letterSpacing,
            padding: props.padding,
            paddingTop: props.paddingTop,
            paddingRight: props.paddingRight,
            paddingBottom: props.paddingBottom,
            paddingLeft: props.paddingLeft,
            top: props.top,
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            margin: props.margin,
            marginTop: props.marginTop,
            marginRight: props.marginRight,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            width:props.width,
            height:props.height,
            borderRadius:props.borderRadius,
            textDecorationLine:props.textDecorationLine


        }
    })


    return (
        
           <View>
             <Text  numberOfLines={props.numberOfLines} style={styles.text} onPress={props.onPress}>{props.title}</Text>
           </View>
        
    )
}

export default CustomText

