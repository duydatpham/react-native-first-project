import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const {width, height} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth / 361) * 452;

export default class TopProduct extends Component {
    render() {
        const { wrapper, titleHeader, productContainer, textName, textPrice, imageProduct } = styles;
        return (
            <View style={wrapper}>
                <View>
                    <Text style={titleHeader}>Top Product</Text>
                </View>
                <View style={productContainer}>
                    <TouchableOpacity style={styles.product} onPress={() => this.props.navigation.navigate('ProductList')}>
                        <Image source={require('../../../../assets/temp/sp1.jpeg')} style={imageProduct} />
                        <Text style={textName}>Product Name</Text>
                        <Text style={textPrice}>$300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.product}>
                        <Image source={require('../../../../assets/temp/sp2.jpeg')} style={imageProduct} />
                        <Text style={textName}>Product Name</Text>
                        <Text style={textPrice}>$300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.product}>
                        <Image source={require('../../../../assets/temp/sp3.jpeg')} style={imageProduct} />
                        <Text style={textName}>Product Name</Text>
                        <Text style={textPrice}>$300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.product}>
                        <Image source={require('../../../../assets/temp/sp4.jpeg')} style={imageProduct} />
                        <Text style={textName}>Product Name</Text>
                        <Text style={textPrice}>$300</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // height: height * 0.25,
        backgroundColor: "#fff",
        margin: 10,
        padding: 10
    },
    titleHeader: {
        fontSize: 16,
        color: "gray"
    },
    product:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        justifyContent:"center", 
        alignItems: "center",
        marginTop: 10
    },
    productContainer: {
        // backgroundColor: "red",
        // height: productHeight,
        // width: productWidth,
        
        flexDirection: "row",
        justifyContent: "space-around",
        // alignItems: "center"
        flexWrap: "wrap"
    },
    textName: {
        fontWeight: '400'
    },
    textPrice: {
        color: "purple"
    },
    imageProduct: {
        height: productHeight,
        width: productWidth
    }
})