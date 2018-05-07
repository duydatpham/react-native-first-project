import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

const { height } = Dimensions.get("window");

class Header extends Component {

    render() {
        const { wrapper, row1, textInput, iconStyle } = styles;
        return (
            <View style={ wrapper }>
                <View style={ row1 }>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={require('../assets/appicon/ic_menu.png')} style={iconStyle} />
                    </TouchableOpacity>
                    <Text>Dress wearing design</Text>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={require('../assets/appicon/ic_logo.png')} style={iconStyle} />
                    </TouchableOpacity>
                </View>
                <TextInput style={ textInput } underlineColorAndroid='transparent' placeholder='What do you buy?' />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper:{
        height: height / 8,
        backgroundColor: "#34B089",
        padding: 10,
        justifyContent: "space-around"
    },
    row1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textInput: {
        height: height/25,
        backgroundColor: 'white',
        padding: 0,
        paddingLeft: 10
    },
    iconStyle: {
        width:25,
        height:25
    },
    titleStyle: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 20
    }
})
export default Header;