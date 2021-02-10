/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    StatusBar,
    Text
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.maincontainer}>
                <ScrollView>
                    <View style={styles.logocenter}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/logo.png')}
                        />
                        <Text style={styles.logocaption} onPress={() => navigation.navigate('login')}>Merchant App</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    logocenter: {
        height:500,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    tinyLogo: {
        width: 180,
        height: 117,
    },
    logocaption: {
        fontSize: 18,
        color: "#c91e06",
        fontWeight: "600"
    }
});

export default Home;
