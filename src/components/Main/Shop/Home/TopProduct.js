import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ListView } from 'react-native';

const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth / 361) * 452;

export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }
    componentWillReceiveProps(nextProps){
        const { topProducts } = nextProps;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(topProducts)
        })
    }
    render() {
        const { wrapper, titleHeader, productContainer, textName, textPrice, imageProduct } = styles;
        return (
            <View style={wrapper}>
                <View>
                    <Text style={titleHeader}>Top Product</Text>
                </View>
                    <ListView
                        contentContainerStyle={productContainer}
                        dataSource={this.state.dataSource}
                        enableEmptySections={true}
                        renderRow={(row) =>(
                            <TouchableOpacity style={styles.product} onPress={() => this.props.navigation.navigate('ProductDetail', {
                                product:row
                              })}>
                                <Image source={{uri:`http://192.168.2.109/webservice/app/images/product/${row.images[1]}`}} style={imageProduct} />
                                <Text style={textName}>{row.name}</Text>
                                <Text style={textPrice}>${row.price}</Text>
                            </TouchableOpacity>    
                        )}
                    />
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
    product: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        justifyContent: "center",
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