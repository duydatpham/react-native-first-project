import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

class Menu extends Component {
    openMenu() {
        alert('123');
    }
    change() {
        return this.props.changeNavigator('12');
    }
    render() {
        return (
            <View style={{ flex:1 }}>
                <Text>Menu</Text>
                <View style={{ flex: 1, backgroundColor: 'gray' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                        <Text>React Native My Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                        <Text>React Native My Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeInfo')}>
                        <Text>React Native My Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderHistory',{
                        open : this.openMenu
                    })}>
                        <Text>React Native My Shop</Text>
                    </TouchableOpacity>
                    <Button
                        onPress={() => this.props.navigation.navigate('OrderHistory')}
                        title="Go to notifications"
                    />
                </View>
            </View>
        );
    }
}

export default Menu;
