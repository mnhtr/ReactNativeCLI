import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';

const GenderSelection = ({gender, setGender}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[
        styles.layoutMale,
        {backgroundColor: gender === 'male' ? '#24263b' : '#323344'},
      ]}
      onPress={() => setGender('male')}>
      <Foundation name="male-symbol" size={90} color="#51caef" />
      <Text style={{color: '#848694'}}>MALE</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[
        styles.layoutFemale,
        {backgroundColor: gender === 'female' ? '#24263b' : '#323344'},
      ]}
      onPress={() => setGender('female')}>
      <Foundation name="female-symbol" size={90} color="#f15123" />
      <Text style={{color: '#848694'}}>FEMALE</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 25,
  },
  layoutMale: {
    flex: 1,
    borderRadius: 10,
    marginEnd: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutFemale: {
    flex: 1,
    borderRadius: 10,
    marginStart: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GenderSelection;
