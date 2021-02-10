/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Color from '../constants/Colors';
import Home from '../screens/home';
import Login from '../screens/login';
import Register from '../screens/register';
import Dashboard from '../screens/dashboard';
import Earning from '../screens/earning';
import OrderManagement from '../screens/order_management';
import AllOrder from '../screens/all_order';
import Track from '../screens/track';
import ReceivedOrder from '../screens/received_order';
import ReadytopickupOrder from '../screens/readytopickup_order';
import CancelledOrder from '../screens/cancelled_order';
import PickedupOrder from '../screens/pickedup_order';
import Profile from '../screens/profile';
import ProductManagement from '../screens/product_management';
import AddNewProduct from '../screens/add_new_product';
import CustomerDrawer from './CustomDrawer';
import ViewListOfProduct from '../screens/ViewListOfProduct';
const ScreenWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Color.red : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Color.red,
};
const StackDreaewer = createStackNavigator();
const StackDreaewerScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Total Earning" component={Earning} />
        <Stack.Screen name="Order Management" component={OrderManagement} />
        <Stack.Screen name="All Order" component={AllOrder} />
        <Stack.Screen name="Track Address" component={Track} />
        <Stack.Screen name="Received Order" component={ReceivedOrder} />
        <Stack.Screen
          name="Ready to pick up Order"
          component={ReadytopickupOrder}
        />
        <Stack.Screen name="Cancelled Order" component={CancelledOrder} />
        <Stack.Screen name="Picked up Order" component={PickedupOrder} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Product Management" component={ProductManagement} />
        <Stack.Screen name="Add New Product" component={AddNewProduct} />
        <Stack.Screen name="ViewListOfProduct" component={ViewListOfProduct} />
      </Stack.Navigator>
    </>
  );
};
const EatsNavigatorScreen = createStackNavigator();
const EatsNavigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <EatsNavigatorScreen.Navigator initialRouteName="Home">
        <EatsNavigatorScreen.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome', headerShown: false}}
        />
        <EatsNavigatorScreen.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <EatsNavigatorScreen.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <EatsNavigatorScreen.Screen name="Total Earning" component={Earning} />
        <EatsNavigatorScreen.Screen
          name="Order Management"
          component={OrderManagement}
        />
        <EatsNavigatorScreen.Screen name="All Order" component={AllOrder} />
        <EatsNavigatorScreen.Screen
          name="Received Order"
          component={ReceivedOrder}
        />
        <EatsNavigatorScreen.Screen
          name="Ready to pick up Order"
          component={ReadytopickupOrder}
        />
        <EatsNavigatorScreen.Screen
          name="Cancelled Order"
          component={CancelledOrder}
        />
        <EatsNavigatorScreen.Screen
          name="Picked up Order"
          component={PickedupOrder}
        />
        <EatsNavigatorScreen.Screen name="Profile" component={Profile} />
        <EatsNavigatorScreen.Screen
          name="Product Management"
          component={ProductManagement}
        />
        <EatsNavigatorScreen.Screen
          name="Add New Product"
          component={AddNewProduct}
        />
        <EatsNavigatorScreen.Screen
          name="ViewListOfProduct"
          component={ViewListOfProduct}
        />
      </EatsNavigatorScreen.Navigator>
    </>
  );
};
function Dreawer() {
  return (
    <Drawer.Navigator
      initialRouteName="StackDreaewerScreen"
      drawerContent={CustomerDrawer}
      drawerStyle={{width: ScreenWidth / 1.6, shadowColor: 'black'}}>
      <Drawer.Screen name="Profile" component={Profile} />

      <Drawer.Screen name="Order Management" component={OrderManagement} />
      <Drawer.Screen
        name="StackDreaewerScreen"
        component={StackDreaewerScreen}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dreawer"
            component={Dreawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EatsNavigator"
            component={EatsNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
