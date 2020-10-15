import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert,
  Modal,
  Dimensions,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const Dialog = ({modalVisible, setModalVisible}) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>YOUR RESULT</Text>
        <View style={styles.showContent}>
          <Text style={styles.modalText}>BMI:</Text>
        </View>
        <TouchableOpacity
          style={styles.formBottom}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.textBottom}>RE-CALCULATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: '#1d2236',
  },
  showContent: {
    backgroundColor: '#323344',
    height: height - 200,
    marginHorizontal: 25,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginVertical: 30,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
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

export default Dialog;
