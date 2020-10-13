import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Gender from './Gender';

const {width, height} = Dimensions.get('window');
import WeightAge from './WeightAge';
import Height from './Height';

const BMI = () => {

  const [gender, setGender] = useState("male");

  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#1a2634" />
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>BMI CALCULATOR</Text>
          <View style={styles.reline} />
        </View>
        <Gender gender={gender} setGender={setGender}/>
        <Height/>
        <WeightAge />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2634',
  },
  title: {
    fontSize: 23,
    color: '#fff',
    marginTop: 20,
  },
  reline: {
    width: width,
    backgroundColor: '#131a2c',
    height: 4,
    marginTop: 15,
  },

});

export default BMI;
