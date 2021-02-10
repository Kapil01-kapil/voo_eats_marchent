/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    StatusBar,
    Text,
    Alert,
    Modal,
    TouchableHighlight
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../styles/style'


const CancelledOrder = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.maincontainer}>
                <ScrollView>
                    <View style={styles.container}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <TouchableHighlight style={styles.cross_position} onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                                        <Image
                                            style={styles.cross}
                                            source={require('../assets/icons/cross.png')}
                                        />
                                    </TouchableHighlight>
                                    <Text style={styles.modalText}>Upcoming Order Details</Text>
                                    <View>
                                        <Text style={{ fontWeight: 'bold' }}>Contact Details</Text>
                                        <Text style={styles.details}>Sumit Aryan</Text>
                                        <Text style={styles.details}>Contact No. - 8882137914</Text>
                                        <Text style={styles.details}>Email Address - sumit.aryan@zooneto.com</Text>
                                    </View>

                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Delivery Address</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                            <Image
                                                style={styles.home}
                                                source={require('../assets/icons/home.png')}
                                            />
                                            <Text style={{ fontWeight: 'bold' }}>Home</Text>
                                        </View>
                                        <Text style={styles.details}>43-D San Franciso, Near Church</Text>
                                        <Text style={styles.details}>USA</Text>
                                    </View>
                                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontWeight: 'bold' }}>Track Address</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('Track Address')}>
                                            <Image
                                                style={styles.side}
                                                source={require('../assets/icons/side.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        
                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#c1272d', fontSize: 10 }}>cancelled Order</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>

                        

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#c1272d', fontSize: 10 }}>cancelled Order</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#c1272d', fontSize: 10 }}>cancelled Order</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.product_card} onPress={() => {
                            setModalVisible(true);
                        }}>
                            <View style={styles.left}>
                                <Image
                                    style={styles.food_img}
                                    source={require('../assets/food-item-img/food-4.png')}
                                />
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.food_name}>Grilled Chicken</Text>
                                <Text style={styles.rest_name}>By KFC</Text>
                                <View style={styles.line}></View>
                                <Text style={styles.food_size}>Regular</Text>
                                <Text style={styles.food_quantity}>1</Text>
                            </View>
                            <View style={styles.right}>
                                <Text style={{ color: '#c1272d', fontSize: 10 }}>cancelled Order</Text>
                                <Text>Rs. <Text style={{ color: '#4BB453', fontWeight: 'bold' }}>1000/-</Text></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const cancelledcrder = StyleSheet.create({

});

export default CancelledOrder;
