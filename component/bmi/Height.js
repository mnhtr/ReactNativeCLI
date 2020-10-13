import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
const Height = () => (
    <View style={styles.layoutHeight}>
    <Text style={{color: '#575a6b', marginTop: 5}}>HEIGHT</Text>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.resultHeight}> 150</Text>
      <Text style={styles.cm}> cm</Text>
    </View>
    <Slider
      style={{width: '100%', marginTop: 10 , marginBottom: 35}}
      minimumValue={0}
      maximumValue={250}
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
      
});

export default Height;
