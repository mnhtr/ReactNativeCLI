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

const Dialog = ({
  modalVisible,
  setModalVisible,
  setWeight,
  setHeight,
  setAge,
  result,
}) => {
  var type;
  var reason;
  if (result < 18.5) {
    type = <Text style={styles.textType}>underwieght</Text>;
    reason = (
      <Text style={styles.textReason}>
        You need to regularly monitor your height and weight
      </Text>
    );
  } else if (18.5 < result < 24.9) {
    type = <Text style={[styles.textType, {color: '#00CCFF'}]}>normal</Text>;
    reason = <Text style={styles.textReason}>perfect, standard weight</Text>;
  } else if (result >= 25) {
    type = (
      <Text style={[styles.textType, {color: '#FF0033'}]}>overweight</Text>
    );
    reason = (
      <Text style={styles.textReason}>
        You need to regularly monitor your height and weight
      </Text>
    );
  }

  return (
    <>
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
              {type}
              <Text style={[styles.modalText, {fontSize: 40}]}>{result}</Text>
              {reason}
            </View>
            <TouchableOpacity
              style={styles.formBottom}
              onPress={() => {
                setModalVisible(!modalVisible);
                setAge(0);
                setHeight(0);
                setWeight(0);
              }}>
              <Text style={styles.textBottom}>RE-CALCULATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

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
  textType: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FF9900',
  },
  textReason: {
    marginHorizontal: 25,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
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
