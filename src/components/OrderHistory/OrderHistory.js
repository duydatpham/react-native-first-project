import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from '../Main/Menu';

export default class OrderHistory extends Component {
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <TouchableOpacity>
                    <Text>OrderHistory </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
