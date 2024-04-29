import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage'
import CustomText from './CustomText'
import theme from '../utils/Styles'


const Header = (props, {navigation}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <View style={styles.box1}>
                    <CustomImage
                        source={require('../assets/images/bar.png')}
                        width={20}
                        height={20}
                        resizeMode='contain'
                    />
                </View>
            </TouchableOpacity>

            <View style={styles.location}>
                <CustomText
                    title={props.title}
                    bottom={5}
                    fontFamily={theme.fonts.SofiaProRegular}
                    fontSize={theme.fontSize.regular}
                    color='#8C9099'
                />
                <CustomText
                    title={props.location}
                    fontFamily={theme.fonts.SofiaProRegular}
                    fontSize={theme.fontSize.small}
                    color={theme.colors.primary}
                    bottom={7}
                    letterSpacing={-0.5}
                />
            </View>
            <TouchableOpacity onPress={props.onPressprofile}>
                <View style={styles.box}>

                    <CustomImage
                        source={props.img}
                        width={40}
                        height={40}
                        borderRadius={10}
                        resizeMode='cover'
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {

        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        alignItems: 'center'
    },
    box1: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        padding: 10,
        borderRadius: 10
    },
})