import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Gender from './Gender';

const {width, height} = Dimensions.get('window');
import WeightAge from './WeightAge';
import Height from './Height';
import Dialog from './Dialog';

const BMI = () => {
  const [gender, setGender] = useState('male');
  const [modalVisible, setModalVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const result = (weight / (((height / 100) * height) / 100)).toFixed(2);
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#1d2236" />
      <SafeAreaView style={styles.container}>
        <Dialog
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          result={result}
          setAge={setAge}
          setHeight={setHeight}
          setWeight={setWeight}
          result={result}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>BMI CALCULATOR</Text>
          <View style={styles.reline} />
        </View>
        <Gender gender={gender} setGender={setGender} />
        <Height height={height} setHeight={setHeight} />
        <WeightAge
          weight={weight}
          setWeight={setWeight}
          age={age}
          setAge={setAge}
        />
        <TouchableOpacity
          style={styles.formBottom}
          onPress={() => {
            height === 0 && weight === 0 && age === 0
              ? setModalVisible(false)
              : setModalVisible(true);
          }}>
          <Text style={styles.textBottom}>CALCULATE</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2236',
  },
  title: {
    fontSize: 23,
    color: '#fff',
    marginTop: 20,
  },
  reline: {
    width: width,
    backgroundColor: '#16192e',
    height: 4,
    marginTop: 15,
  },
  textBottom: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  formBottom: {
    backgroundColor: '#e83d66',
    borderRadius: 5,
    marginHorizontal: 25,
    marginVertical: 25,
    alignItems: 'center',
  },
});

export default BMI;
