import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {
    render() {
        return (
            <ScrollView
             style={{ flex:1, backgroundColor:'#DBDBDB'}}>
                <Collection/>
                <Category />
                <TopProduct />
            </ScrollView>
        );
    }
}

export default Home;