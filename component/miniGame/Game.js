import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import rock from '../assets/rock.jpg';
import paper from '../assets/paper.jpg';
import scissor from '../assets/scissor.jpg';

const arr = [
  {number: 0, image: rock},
  {number: 1, image: paper},
  {number: 2, image: scissor},
];

const Game = () => {
  const [paramYou, setYouIcon] = useState();
  const [paramComputer, setComputerIcon] = useState();
  const [numberYou, setYouNumber] = useState();
  const [numberComputer, setComputerNumber] = useState();

  var randomItem = arr[Math.floor(Math.random() * arr.length)];

  var result;
  if (numberYou > numberComputer) {
    result = 'YOU WIN';
  } else if (numberYou < numberComputer) {
    result = 'COMPUTER WIN';
  } else if (numberYou === numberComputer) {
    result = 'DRAW';
  }

  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#1a2634" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>{result}</Text>
        </View>

        <View style={styles.layoutContent}>
          <View style={styles.content}>
            <Image source={paramYou} style={styles.image} />
            <Text style={{fontSize: 20}}>You</Text>
          </View>
          <View style={styles.content}>
            <Image source={paramComputer} style={styles.image} />
            <Text style={{fontSize: 20}}>Computer</Text>
          </View>
        </View>

        <View style={styles.layoutContent}>
          <TouchableOpacity
            style={styles.content}
            onPress={() => {
              setYouIcon(rock);
              setYouNumber(0);
              setComputerIcon(randomItem.image);
              setComputerNumber(randomItem.number);
            }}>
            <Image source={rock} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.content}
            onPress={() => {
              setYouIcon(paper);
              setYouNumber(1);
              setComputerIcon(randomItem.image);
              setComputerNumber(randomItem.number);
            }}>
            <Image source={paper} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.content}
            onPress={() => {
              setYouIcon(scissor);
              setYouNumber(2);
              setComputerIcon(randomItem.image);
              setComputerNumber(randomItem.number);
            }}>
            <Image source={scissor} style={styles.image} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  layoutContent: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Game;
