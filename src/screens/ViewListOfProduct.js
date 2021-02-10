import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Switch} from 'react-native';
import Color from '../constants/Colors';
const ViewListOfProduct = (props) => {
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <View>
      <ScrollView horizontal={true}>
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row', marginRight: 60}}>
            <View style={style.Text}>
              <Text style={style.size}>S.no.</Text>
            </View>
            <View style={style.Text}>
              <Text style={style.size}>Product Name</Text>
            </View>
            <View style={style.Text}>
              <Text style={style.size}>Image</Text>
            </View>
            <View style={style.Text}>
              <Text style={style.size}>Price</Text>
            </View>
            <View style={style.Text}>
              <Text style={style.size}>Visiblity</Text>
            </View>
            <View style={style.Text}>
              <Text style={style.size}>Actuon</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginRight: 60}}>
            <View style={style.Text}>
              <Text style={style.size}>1</Text>
            </View>
            <View style={style.Text}>
              <Text style={style.size}>Product Name</Text>
            </View>
            <View style={style.Text}>
              <Image
                source={require('../assets/food-item-img/food-1.png')}
                style={{width: 34, height: 20}}
              />
            </View>
            <View style={style.Text}>
              <Text style={style.size}>
                Rs.<Text style={{color: Color.primary}}>1000</Text>
              </Text>
            </View>
            <View style={style.Text}>
              <Switch
                value={switchValue}
                trackColor={{true: 'red', false: 'grey'}}
                tintColor="red"
                onValueChange={(switchValue) => setSwitchValue(switchValue)}
              />
            </View>
            <View style={style.Text}>
              <Text style={style.size}>Actuon</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  Text: {
    borderColor: Color.red,
    borderWidth: 1,
    padding: 6,
    width: '18%',

    fontSize: 13,
  },
  size: {
    fontSize: 13,
  },
  signin: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  or: {
    fontSize: 30,
    color: '#aaa',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default ViewListOfProduct;
