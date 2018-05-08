import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Animated, Easing, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Drawer from 'react-native-drawer'
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';
import Menu from './Menu';
import Shop from './Shop/Shop';
import ProductList from './Shop/ProductList/ProductList';
import ProductDetail from './Shop/ProductDetail/ProductDetail';

class Main extends Component {
      closeControlPanel = () => {
        this.drawer.close()
      };
      openControlPanel = () => {
        this.drawer.open()
      };
      changeNavigator(){
          console.log('====================================');
          console.log(this.props.navigator);
          console.log('====================================');
      }
    render() {
        return (
            <Drawer
            ref={(ref) => {this.drawer = ref}}
            panOpenMask  = {0.25}
            tapToClose={true}
            openDrawerOffset={0.4}
            content={<Menu navigation={this.props.navigation}/>}
            >
            {/* <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Authentication')}>
                    <Text>React Native My Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                    <Text>React Native My Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeInfo')}>
                    <Text>React Native My Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderHistory')}>
                    <Text>React Native My Shop</Text>
                </TouchableOpacity>
                <Button
                    onPress={() => this.props.navigation.navigate('OrderHistory')}
                    title="Go to notifications"
                />
            </View> */}
            <Shop open={this.openControlPanel.bind(this)} navigation={this.props.navigation}/>
          </Drawer>
        );
    }
}
export default StackNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    Authentication: {
        screen: Authentication,
        navigationOptions: {
            header: null
        }
    },
    ChangeInfo: {
        screen: ChangeInfo
    },
    OrderHistory: {
        screen: OrderHistory
    },
    ProductList: {
        screen: ProductList,
        navigationOptions: {
            header: null
        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            header: null
        }
    },
}, {
        initialRouteName: 'Home'
    }
);
