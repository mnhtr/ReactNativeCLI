import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
const Height = ({height, setHeight}) => (
  <View style={styles.layoutHeight}>
    <Text style={styles.text}>HEIGHT</Text>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.resultHeight}> {height}</Text>
      <Text style={styles.cm}> cm</Text>
    </View>
    <Slider
      style={styles.slider}
      step={1}
      minimumValue={0}
      maximumValue={250}
      onValueChange={setHeight}
      minimumTrackTintColor="#604356"
      maximumTrackTintColor="#000000"
    />
  </View>
);

const styles = StyleSheet.create({
  layoutHeight: {
    backgroundColor: '#333244',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 20,
  },
  resultHeight: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  cm: {
    color: 'white',
    fontSize: 15,
    marginTop: 15,
  },
  text: {
    color: '#848694',
    marginTop: 5,
  },
  slider: {
    width: '100%',
    marginTop: 20,
    marginBottom: 15,
  },
});

export default Height;
