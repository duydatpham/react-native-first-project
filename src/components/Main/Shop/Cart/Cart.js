import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CartView from './CartView';

class Cart extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         cartArray: []
    //     }
    //     console.log('cart---------------------');
    //     console.log(this.props.cartArray);
    //     console.log('cart---------------------');
    // }
    // componentWillMount(nextProps){
    //     console.log('11111111111111111111111111');
    //     console.log(nextProps);
    //     console.log('11111111111111111111111111');
    //     // this.setState({
    //     //     cartArray: nextProps.cartArray
    //     // })
    // }
    // componentDidUpdate(){
    //     console.log('cart---------------------');
    //     console.log(this.props.cartArray);
    //     console.log('cart---------------------');
    // }
    render() {
        return (
            <CartView cartArray={this.props.cartArray}/>
            // <TouchableOpacity style={{backgroundColor:'red'}} onPress={() => this.props.navigation.navigate('ProductList')}>
            //     <Text>Cart</Text>
                
            // </TouchableOpacity>
        );
    }
}

export default Cart;