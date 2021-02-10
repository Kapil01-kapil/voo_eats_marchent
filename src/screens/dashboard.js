/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect,useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/style'
import Dashboard from '../apiEndPoints/Dashboard';
import { api_url } from '../apiEndPoints/Api'
import axios from 'axios';
import { connect } from "react-redux";
const dashboards = props => {
    const [data, setData] = useState([]);

    const UpcomingApi =()=>{
        props
             .Dashboard(`${api_url}vendorprofile`)
             .then(() => {
               const data = props.data;
               setData(data)
             })
             .catch(error => {
               console.log(error);
             });
       }
       useEffect(() => {

        UpcomingApi();
        }, []);

    return (
        <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.maincontainer}>
                    <ScrollView>
                        <View style={[styles.container, { padding: 0 }]}>
                            <View style={{ alignItems: 'center', backgroundColor: '#eee', padding: 10 }}>
                                <Image
                                    style={{ width: '100%', height: 180 }}
                                    source={{uri:`http://zooneto.in/vooeat/public/admin/images/${props.data.profile_image}`}}
                                />
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 10 }}>{props.data.name}</Text>
                                <Text style={{ color: '#c1272d', fontSize: 16 }}>{props.data.name}</Text>
                            </View>

                            <View style={styles.container}>
                                <View style={{ marginTop: 20 }}>
                                    <TouchableOpacity style={dashboard.order_card} onPress={() => props.navigation.navigate('Total Earning')}>
                                        <Image
                                            style={dashboard.gallary}
                                            source={require('../assets/icons/calender.png')}
                                        />
                                        <Text style={dashboard.order_card_title}>Total Earning</Text>
                                        <Text style={dashboard.order_card_quantity}>₹ 2000</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={dashboard.order_card} onPress={() => props.navigation.navigate('All Order')}>
                                        <Image
                                            style={dashboard.gallary}
                                            source={require('../assets/icons/calender.png')}
                                        />
                                        <Text style={dashboard.order_card_title}>Total Orders</Text>
                                        <Text style={dashboard.order_card_quantity}>112</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={dashboard.order_card} onPress={() => props.navigation.navigate('Product Management')}>
                                        <Image
                                            style={dashboard.gallary}
                                            source={require('../assets/icons/calender.png')}
                                        />
                                        <Text style={dashboard.order_card_title}>Manage Products</Text>
                                        <Text style={dashboard.order_card_quantity}>200</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={[dashboard.order_card, dashboard.add_product]} onPress={() => props.navigation.navigate('Add New Product')}>
                                        <Text style={[dashboard.order_card_title, { color: '#fff', fontWeight: 'bold', marginVertical: 10 }]}>Add New Products</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={dashboard.order_card} onPress={() => props.navigation.navigate('Order Management')}>
                                        <Image
                                            style={dashboard.gallary}
                                            source={require('../assets/icons/calender.png')}
                                        />
                                        <Text style={dashboard.order_card_title}>Order Management</Text>
                                        <Text style={dashboard.order_card_quantity}>₹ 2000</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
    )
}





const dashboard = StyleSheet.create({
    order_card: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 16,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        marginBottom: 16
    },
    gallary: {
        width: 40,
        height: 40,
        marginRight: 16
    },
    order_card_title: {
        fontSize: 16
    },
    order_card_quantity: {
        borderWidth: 2,
        borderColor: '#c1272d',
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 4,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4BB543',
        marginLeft: 'auto'
    },
    add_product: {
        backgroundColor: '#c1272d',
        justifyContent: 'center'
    }
});

const mapDispatchToprops = dispatch => ({
    Dashboard: url => dispatch(Dashboard(url))
  });
  
  const mapStateToprops = state => ({
    data: state.apiReducer.data,
    error: state.apiReducer.error,
  });
  
  export default connect(
    mapStateToprops,
    mapDispatchToprops
  )(dashboards);

