/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
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

class Order_Management extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.maincontainer}>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={{ marginTop: 10 }}>
                                <TouchableOpacity style={order_management.order_card} onPress={() => this.props.navigation.navigate('All Order')}>
                                    <Image
                                        style={order_management.gallary}
                                        source={require('../assets/icons/calender.png')}
                                    />
                                    <Text style={order_management.order_card_title}>View All Orders</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={order_management.order_card} onPress={() => this.props.navigation.navigate('Received Order')}>
                                    <Image
                                        style={order_management.gallary}
                                        source={require('../assets/icons/calender.png')}
                                    />
                                    <Text style={order_management.order_card_title}>View Order Recived</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={order_management.order_card} onPress={() => this.props.navigation.navigate('Ready to pick up Order')}>
                                    <Image
                                        style={order_management.gallary}
                                        source={require('../assets/icons/calender.png')}
                                    />
                                    <Text style={order_management.order_card_title}>View Order Ready To Pick Up</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={order_management.order_card} onPress={() => this.props.navigation.navigate('Cancelled Order')}>
                                    <Image
                                        style={order_management.gallary}
                                        source={require('../assets/icons/calender.png')}
                                    />
                                    <Text style={order_management.order_card_title}>View Order Cancelled</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={order_management.order_card} onPress={() => this.props.navigation.navigate('Picked up Order')}>
                                    <Image
                                        style={order_management.gallary}
                                        source={require('../assets/icons/calender.png')}
                                    />
                                    <Text style={order_management.order_card_title}>View Order Picked Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    };

}

const order_management = StyleSheet.create({
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
        marginBottom: 20
    },
    gallary: {
        width: 40,
        height: 40,
        marginRight: 16
    },
    order_card_title: {
        fontSize: 16
    },
});

export default Order_Management
