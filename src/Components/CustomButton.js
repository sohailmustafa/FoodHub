import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import theme from '../utils/Styles'

const CustomButton = (props) => {

    const styles = StyleSheet.create({
        btn: {
            backgroundColor: props.backgroundColor,
            color: props ? props.color : 'red',
            width: props ? props.width : '70%',
            height: props.height,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
            borderRadius: props.borderRadius,
            justifyContent: props.justifyContent,
            padding: props.padding,
            paddingTop: props.paddingTop,
            paddingRight: props.paddingRight,
            paddingBottom: props.paddingBottom,
            paddingLeft: props.paddingLeft,
            top: props.top,
            marginHorizontal: props.marginHorizontal,
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            margin: props.margin,
            marginTop: props.marginTop,
            marginRight: props.marginRight,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            position: props.position

        },
        btnText: {
            textAlign: props.textAlign,
            color: props.color,
            fontSize: props.fontSize,
            fontFamily: props.fontFamily
        },
    })

    return (

        <View>
            <TouchableOpacity  style={styles.btn} onPress={props.onPress}>
                {
                    props.loading ? <ActivityIndicator color={theme.colors.white} size={'large'} />
                        :
                        <Text style={styles.btnText}>{props.title}</Text>

                }
            </TouchableOpacity>
        </View>

    )
}

export default CustomButton
