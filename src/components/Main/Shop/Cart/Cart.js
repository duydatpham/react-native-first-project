import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CartView from './CartView';

class Cart extends Component {
    render() {
        return (
            <CartView />
            // <TouchableOpacity style={{backgroundColor:'red'}} onPress={() => this.props.navigation.navigate('ProductList')}>
            //     <Text>Cart</Text>
                
            // </TouchableOpacity>
        );
    }
}

export default Cart;