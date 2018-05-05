import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
    ontest = () =>{

    }
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <TouchableOpacity onPress={this.ontest()}>
                    <Text>OrderHistory </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
