/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
  Picker,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/style';
import Input from '../components/UI/ProductInput';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';
import {connect} from 'react-redux';
import {fetchLogin} from '../store/actions/auth';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import Color from '../constants/Colors';
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};
const add_new_product = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const [selectedCategrory, setSelectedCategrory] = useState(
    'Select Categrory',
  );
  const [selectedSubCategrory, setSelectedSubCategrory] = useState(
    'Select Sub Categrory',
  );

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      username: '',
      password: '',
    },
    inputValidities: {
      username: false,
      password: false,
    },
    formIsValid: false,
  });
  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
      console.log(error);
    }
  }, [error]);
  const authHandler = async () => {
    let action;
    action = authActions.login(
      formState.inputValues.username,
      formState.inputValues.password,
    );

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      console.log('gf');
      props.navigation.navigate('Dreawer');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.maincontainer}>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 60,
                height: 50,

                borderRadius: 10,
                borderColor: 'red',
                borderWidth: 1,
                margin: 10,
              }}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
              }}
            />
            <Image
              style={{
                resizeMode: 'contain',
                width: 60,
                height: 50,
                borderRadius: 10,
                borderColor: 'red',
                borderWidth: 1,
                margin: 10,
              }}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
              }}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                }}
                source={require('../assets/icons/image.png')}
              />
              <Text style={{fontSize: 13, textAlign: 'center'}}>
                Add Product Image
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <View
                style={{
                  padding: 10,
                  borderColor: Color.red,
                  marginTop: 10,
                  borderRadius: 5,
                  borderWidth: 1,
                }}>
                <Picker
                  selectedValue={selectedCategrory}
                  style={{height: 30}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedCategrory(itemValue)
                  }>
                  <Picker.Item
                    label="Select Categrory"
                    value="SelectCategrory"
                  />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>
              <View
                style={{
                  padding: 10,
                  borderColor: Color.red,
                  marginTop: 10,
                  borderRadius: 5,
                  borderWidth: 1,
                }}>
                <Picker
                  selectedValue={selectedSubCategrory}
                  style={{height: 30}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedSubCategrory(itemValue)
                  }>
                  <Picker.Item
                    label="Select Sub Categrory"
                    value="SelectSubCategrory"
                  />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>

              <Input
                id="AddProductName"
                keyboardType="email-address"
                placeholder="Add Product Name"
                required
                autoCapitalize="none"
                errorText="Please enter a valid add product name."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="Price"
                keyboardType="email-address"
                placeholder="Price"
                required
                autoCapitalize="none"
                errorText="Please enter a valid add Price."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="Description"
                keyboardType="email-address"
                placeholder="Description"
                required
                autoCapitalize="none"
                errorText="Please enter a valid Description "
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: '50%',
              backgroundColor: Colors.red,
              height: 40,
              justifyContent: 'center',
              position: 'relative',
              margin: 100,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              Sumit
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default add_new_product;
