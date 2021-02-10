/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/style';

class ProductManagement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.maincontainer}>
          <ScrollView>
            <View style={styles.container}>
              <View style={{flexDirection: 'row', marginVertical: '60%'}}>
                <View style={[productmanagemenr.card, {marginRight: 8}]}>
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() =>
                      this.props.navigation.navigate('ViewListOfProduct')
                    }>
                    <Image
                      style={{width: 40, height: 40, marginBottom: 16}}
                      source={require('../assets/icons/calender.png')}
                    />
                    <Text>View List of Products</Text>
                  </TouchableOpacity>
                </View>
                <View style={[productmanagemenr.card, {marginLeft: 8}]}>
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() =>
                      this.props.navigation.navigate('Add New Product')
                    }>
                    <Image
                      style={{width: 40, height: 40, marginBottom: 16}}
                      source={require('../assets/icons/calender.png')}
                    />
                    <Text>Add new Products</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const productmanagemenr = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flex: 0.5,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});

export default ProductManagement;
