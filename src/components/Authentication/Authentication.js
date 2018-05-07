import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Authentication extends Component {
    constructor(props){
        super(props);
        this.state={
            IsSignIn: true
        }
    }
    signIn(){
        this.setState({IsSignIn: true});
    }
    signUp(){
        this.setState({IsSignIn: false});
    }
    render() {
        const SingInJSX= (
            <View style={styles.content}>
                    <TextInput style={styles.textinput} placeholder='Nhập tài khoản' underlineColorAndroid='transparent' />
                    <TextInput style={styles.textinput} secureTextEntry={true} placeholder='Mật Khẩu' underlineColorAndroid='transparent' />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textSignIn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
        );
        const SingUpJSX= (
            <View style={styles.content}>
                    <TextInput style={styles.textinput} placeholder='Nhập Name' underlineColorAndroid='transparent' />
                    <TextInput style={styles.textinput} placeholder='Nhập Email' underlineColorAndroid='transparent' />
                    <TextInput style={styles.textinput} secureTextEntry={true} placeholder='Mật Khẩu' underlineColorAndroid='transparent' />
                    <TextInput style={styles.textinput} secureTextEntry={true} placeholder='Nhập Lại Mật Khẩu' underlineColorAndroid='transparent' />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textSignIn}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
        );
        const mainJSX = this.state.IsSignIn ? SingInJSX : SingUpJSX;
        return (
            <View style={styles.wrapper}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../../assets/appicon/back_white.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>Wearing A Dress</Text>
                    <Image source={require('../../assets/appicon/ic_logo.png')} style={styles.icon}/>
                </View>
                {mainJSX}
                <View style={styles.botBar}>
                    <TouchableOpacity style={styles.button1} onPress={() => this.signIn()}>
                        <Text style={this.state.IsSignIn ? styles.isActive : styles.unActive}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => this.signUp()}>
                        <Text style={!this.state.IsSignIn ? styles.isActive : styles.unActive}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textSignIn: {
        color: '#fff'
    },
    isActive: {
        color: '#34B089'
    },
    unActive: {
        color:'gray'
    },
    button1: {
        backgroundColor: '#fff',
        height:40,
        width: '40%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderRightWidth: 2,
        borderColor:'#34B089',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button2: {
        backgroundColor: '#fff',
        height:40,
        width: '40%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftWidth: 2,
        borderColor:'#34B089',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botBar: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 40,
        width: '80%',
        backgroundColor: '#34B089',
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textinput: {
        height:40,
        width: '80%',
        backgroundColor: '#fff',
        padding: 0,
        paddingLeft: 10,
        borderRadius: 20,
        fontSize: 16,
        marginTop: 10
    },
    content: {
        // paddingTop:200,
        alignItems: 'center'
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-between'
    },
    icon: {
        height: 20,
        width: 20
    },
    textTitle: {
        color: "#fff",
        fontSize: 18
    }
})