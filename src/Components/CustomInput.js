import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = (props) => {

    const styles = StyleSheet.create({
        textInput: {
            borderWidth: props.borderWidth,
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            height: props.height,
            width: props.width,
            borderColor: props.borderColor,
            borderRadius: props.borderRadius,
            backgroundColor: props.backgroundColor,
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
            color:props.color,
            textAlignVertical:props.textAlignVertical
           
        
      
      
      
          }
    })

  return (
    <View>
    <TextInput placeholder={props.placeholder} defaultValue={props.defaultValue} onChangeText={props.onChangeText} keyboardType={props.keyboardType} placeholderTextColor={props.placeholderTextColor} style={styles.textInput} secureTextEntry={props.secureTextEntry} ></TextInput>
  </View>
  )
}

export default CustomInput

