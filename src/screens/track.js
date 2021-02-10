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

const Track = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.maincontainer}>
               <View>
                   <Image 
                    style={{width: '100%', height: '100%'}}
                    source={require('../assets/icons/map.png')}
                   />
               </View>
            </SafeAreaView>
        </>
    );
};

const track = StyleSheet.create({

});

export default Track;
