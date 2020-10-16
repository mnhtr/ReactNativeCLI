import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const WeightAge = ({weight, setWeight, age, setAge}) => (
  <View style={styles.container}>
    <View style={styles.layoutWeight}>
      <Text style={styles.text}>WEIGHT</Text>
      <Text style={styles.result}>{weight}</Text>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => setWeight(++weight)}>
          <MaterialCommunityIcons
            name="plus-circle"
            size={45}
            color="#5e606e"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setWeight(weight === 0 ? 0 : --weight)}>
          <MaterialCommunityIcons
            name="minus-circle"
            size={45}
            color="#5e606e"
          />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.layoutAge}>
      <Text style={styles.text}>AGE</Text>
      <Text style={styles.result}>{age}</Text>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => setAge(++age)}>
          <MaterialCommunityIcons
            name="plus-circle"
            size={45}
            color="#5e606e"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAge(age === 0 ? 0 : --age)}>
          <MaterialCommunityIcons
            name="minus-circle"
            size={45}
            color="#5e606e"
          />
        </TouchableOpacity>
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
  text: {
    color: '#848694',
    marginTop: 5,
  },
});

export default WeightAge;
