import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
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
                <TopProduct navigation={this.props.navigation}/>
                <TouchableOpacity >
                    <Text>on press</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

export default Home;