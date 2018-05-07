import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"

export default class ProductList extends Component {
  render() {
    const { topText, topWrapper, icon, wrapper, content, productImage, productContent, productWrapper } = styles;
    return (
      <View style={wrapper}>
        <ScrollView style={content}>
          <View style={topWrapper}>
            <Image source={require('../../../../assets/appicon/backList.png')} style={icon} />
            <Text style={topText}>this is product list</Text>
            <View></View>
          </View>
          <View>
            <View style={productWrapper}>
              <Image source={require('../../../../assets/temp/sp3.jpeg')} style={productImage}  resizeMode="contain"/>
              <View style={productContent}>
                <Text style={styles.detailName}>Lace Sleeve Si</Text>
                <Text style={styles.detailPrice}>$300</Text>
                <Text>Matearal leather</Text>
                <View style={styles.detailColorWrapper}>
                  <Text>Coler RoyalBlye</Text>
                  <Text style={styles.circleText}></Text>
                  <Text>View Detail</Text>
                </View>
              </View>
            </View>
            <View style={productWrapper}>
              <Image source={require('../../../../assets/temp/sp1.jpeg')} style={productImage}  resizeMode="contain"/>
              <View style={productContent}>
                <Text style={styles.detailName}>Lace Sleeve Si</Text>
                <Text style={styles.detailPrice}>$300</Text>
                <Text>Matearal leather</Text>
                <View style={styles.detailColorWrapper}>
                  <Text>Coler RoyalBlye</Text>
                  <Text style={styles.circleText}></Text>
                  <Text>View Detail</Text>
                </View>
              </View>
            </View>
            <View style={productWrapper}>
              <Image source={require('../../../../assets/temp/sp2.jpeg')} style={productImage}  resizeMode="contain"/>
              <View style={productContent}>
                <Text style={styles.detailName}>Lace Sleeve Si</Text>
                <Text style={styles.detailPrice}>$300</Text>
                <Text>Matearal leather</Text>
                <View style={styles.detailColorWrapper}>
                  <Text>Coler RoyalBlye</Text>
                  <Text style={styles.circleText}></Text>
                  <Text>View Detail</Text>
                </View>
              </View>
            </View>
            <View style={productWrapper}>
              <Image source={require('../../../../assets/temp/sp4.jpeg')} style={productImage}  resizeMode="contain"/>
              <View style={productContent}>
                <Text style={styles.detailName}>Lace Sleeve Si</Text>
                <Text style={styles.detailPrice}>$300</Text>
                <Text>Matearal leather</Text>
                <View style={styles.detailColorWrapper}>
                  <Text>Coler RoyalBlye</Text>
                  <Text style={styles.circleText}></Text>
                  <Text>View Detail</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  circleText: {
    height: 20,
    width: 20,
    backgroundColor: 'blue',
    borderRadius: 10
  },
  detailColorWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  detailName: {
    color: 'silver',
    marginTop:5,
    marginBottom: 5
  },
  detailPrice: {
    color: 'purple',
    marginTop:5,
    marginBottom: 5
  },
  productWrapper: {
    flexDirection: 'row',
    padding: 5,
  },
  productImage: {
    flex: 1,
    height: 113,
    width: 90
  },
  productContent: {
    flex: 2,
    paddingLeft: 5
  },
  wrapper: {
    padding: 10,
    backgroundColor: 'silver',
    flex: 1
  },
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    borderColor: 'silver',
    paddingBottom: 10,
  },
  topText:{
    color: 'purple',
    fontSize: 16
  },
  icon: {
    width: 25,
    height: 25
  },
  content: {
    backgroundColor: '#fff',
    padding: 10
  }
})
