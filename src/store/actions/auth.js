import React, {useState, useEffect, useReducer, useCallback} from 'react';
import axios from 'axios';
import {api_url} from '../../apiEndPoints/Api';
import AsyncStorage from '@react-native-community/async-storage';

export const AUTHENTICATE = 'AUTHENTICATE';
export const login = (username, password) => {
  // let body = new FormData()
  //   body.append('username', username);
  //   body.append('password', password);
  //   body.append('islogin', 'email');

  let body = {
    username: username,
    password: password,
    islogin: 'email',
  };
  //let url = `${api_url}login`;
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}login`, body);
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    console.log(data);
    console.log(data);
    // dispatch(authenticate(resData.localId, resData.idToken));
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(data.expiresIn) * 1000
    // );

    AsyncStorage.setItem('user_id', data.User_Id);
    console.log(AsyncStorage.setItem('user_id', data.User_Id));

    //get id
    AsyncStorage.getItem('user_id');
    console.log(AsyncStorage.getItem('user_id'));
  };
};

export const MyProfile = (name, email, mobile) => {
  // let body = new FormData()
  //   body.append('username', username);
  //   body.append('password', password);
  //   body.append('islogin', 'email');

  let body = {
    name: name,
    email: email,
    mobile: mobile,
    vendor_id: '13',
  };
  //let url = `${api_url}login`;
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}vendoreditprofile`, body);
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    console.log(data);
    console.log(data);
    // dispatch(authenticate(resData.localId, resData.idToken));
    // const expirationDate = new Date(
    //   new Date().getTime() + parseInt(data.expiresIn) * 1000
    // );
  };
};
