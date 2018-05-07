import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

class Collection extends Component {
    render() {
        const { wrapper, text, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex:1, justifyContent: "center" }}>
                    <Text style={text}>Spring Collection</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Image style={imageStyle} source={require('../../../../assets/temp/banner.jpg')}/>
                </View>
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight =  (imageWidth / 933) * 465;
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.4,
        backgroundColor: "white",
        margin: 10,
        shadowColor: "black",
        shadowOffset: { width:1, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
        padding: 10,
        paddingTop: 0
    },
    text: {
        fontSize:16,
        color: "gray"
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }
})
export default Collection;