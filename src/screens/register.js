/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView, StyleSheet, ScrollView, View, StatusBar, Text, TextInput, Image, TouchableOpacity
} from 'react-native';
import styles from '../styles/style'

class Register extends React.Component {
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
                            <Text style={login.loginText}>Register</Text>

                            <View>
                                <Text style={styles.input_label}>Full name</Text>
                                <TextInput style={styles.text_input} placeholder="Abhishek Gautam" placeholderTextColor='#ccc' />
                            </View>
                            <View>
                                <Text style={styles.input_label}>Email Address</Text>
                                <TextInput style={styles.text_input} placeholder="info@vooeats.com" />
                            </View>
                            <View>
                                <Text style={styles.input_label}>Mobile No.</Text>
                                <TextInput style={styles.text_input} placeholder="9111121265" placeholderTextColor='#ccc' />
                            </View>
                            <View>
                                <Text style={styles.input_label}>Password</Text>
                                <TextInput style={styles.text_input} placeholder="xxxxxxxxxx" />
                            </View>
                            <View>
                                <Text style={styles.input_label}>Confirm Password</Text>
                                <TextInput style={styles.text_input} placeholder="xxxxxxxxxx" />
                            </View>

                            <TouchableOpacity style={{ backgroundColor: '#c1272d', borderRadius: 4, marginTop: 20, }}>
                                <Text style={login.signin}>Register</Text>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
                                <Text>Already a member ?,</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                                    <Text style={{ color: '#c1272d', fontSize: 16 }}> Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    };

}

const login = StyleSheet.create({
    loginText: {
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
    },

    signin: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
        textTransform: 'capitalize',
    },
    gallary: {
        width: 20,
        height: 20
    }
});

export default Register
