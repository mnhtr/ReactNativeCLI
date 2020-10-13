import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WeightAge = () => (
  <View style={styles.container}>
    <View style={styles.layoutWeight}>
      <Text style={{color: '#575a6b', marginTop: 5}}>WEIGHT</Text>
      <Text style={styles.result}>50</Text>
      <View style={styles.item}>
        <MaterialCommunityIcons name="plus-circle" size={45} color="#5c626d" />
        <MaterialCommunityIcons name="minus-circle" size={45} color="#5c626d" />
      </View>
    </View>
    <View style={styles.layoutAge}>
      <Text style={{color: '#575a6b', marginTop: 5}}>AGE</Text>
      <Text style={styles.result}>20</Text>
      <View style={styles.item}>
        <MaterialCommunityIcons name="plus-circle" size={45} color="#5c626d" />

        <MaterialCommunityIcons name="minus-circle" size={45} color="#5c626d" />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 20,
  },

  layoutWeight: {
    flex: 1,
    borderRadius: 10,
    marginEnd: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333244',
  },
  layoutAge: {
    flex: 1,
    borderRadius: 10,
    marginStart: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333244',
  },
  result: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  item: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 5,
  },
});

export default WeightAge;
