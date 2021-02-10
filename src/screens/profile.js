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
  Image,
  Alert,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Color from '../constants/Colors';
import styles from '../styles/style';
import Input from '../components/UI/Input';
import PostApi from '../apiEndPoints/PostApi';
import {api_url} from '../apiEndPoints/Api';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';
import axios from 'axios';

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
const Profile = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isState, setState] = useState(false);
  const [error, setError] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: '',
      email: '',
      mobile: '',
    },
    inputValidities: {
      name: false,
      email: false,
      mobile: false,
    },
    formIsValid: false,
  });

  const ProfileApi = () => {
    props
      .PostApi(`${api_url}vendorprofile`)
      .then(() => {
        const data = props.data;
        setState({
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    ProfileApi();
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
      console.log(error);
    }
  }, [error]);
  const authHandler = async () => {
    let action;
    action = authActions.MyProfile(
      formState.inputValues.name,
      formState.inputValues.email,
      formState.inputValues.mobile,
    );

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      console.log('gf');
      setModalVisible(!modalVisible);
      // props.navigation.navigate('Dreawer');
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
      <StatusBar barStyle="dark-content" backgroundColor={Color.red} />
      <SafeAreaView style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text
                style={{color: Color.red, fontSize: 24, fontWeight: 'bold'}}>
                {props.data.name}
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: Color.red, fontSize: 16}}>
                  {props.data.email}
                </Text>
                <Text
                  style={{color: 'black', fontSize: 16}}
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  Edit
                </Text>
              </View>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{width: 300}}>
                    <Input
                      id="name"
                      label="username"
                      placeholder="Syanjdfs sharma"
                      required
                      autoCapitalize="none"
                      errorText="Please enter a valid email address."
                      onInputChange={inputChangeHandler}
                      initialValue=""
                    />
                    <Input
                      id="email"
                      label="Email"
                      keyboardType="email-address"
                      placeholder="info@vooeats.com"
                      required
                      email
                      autoCapitalize="none"
                      errorText="Please enter a valid email address."
                      onInputChange={inputChangeHandler}
                      initialValue=""
                    />
                    <Input
                      id="mobile"
                      label="Mobile number"
                      keyboardType="number-pad"
                      placeholder="9111606923"
                      required
                      mobile
                      autoCapitalize="none"
                      errorText="Please enter a valid email address."
                      onInputChange={inputChangeHandler}
                      initialValue=""
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'lightgreen',
                        width: '45%',
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={authHandler}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 15,
                        }}>
                        Save
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'red',
                        width: '40%',
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 15,
                        }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            <View style={profile.profile_card}>
              <View style={profile.spacing}>
                <Text style={{fontSize: 16}}>Full Name</Text>

                <Text style={{color: Color.red, fontSize: 16}}>
                  {props.data.name}
                </Text>
              </View>
              <View style={profile.spacing}>
                <Text style={{fontSize: 16}}>Email</Text>
                <Text style={{color: Color.red, fontSize: 16}}>
                  {props.data.email}
                </Text>
              </View>
              <View style={profile.spacing}>
                <Text style={{fontSize: 16}}>Gender</Text>
                <Text style={{color: Color.red, fontSize: 16}}>Male</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const profile = StyleSheet.create({
  profile_card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 30,
    borderRadius: 14,
  },
  spacing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});
const mapDispatchToProps = (dispatch) => ({
  PostApi: (url) => dispatch(PostApi(url)),
});

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  error: state.apiReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
