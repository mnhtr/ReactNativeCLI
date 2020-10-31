import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const ItemNew = ({item}) => (
  <View style={styles.container}>
    <View style={styles.component}>
      <Image style={styles.image} source={{uri: item.urlToImage}} />
      <View style={{flex: 1, marginStart: 10}}>
        <Text style={styles.content} numberOfLines={3}>
          {item.content}
        </Text>
        <Text style={styles.time}>{item.publishedAt}</Text>
      </View>
    </View>

    <View style={styles.reline} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    flexDirection: 'column',
  },
  component: {
    flexDirection: 'row',
 
  },
  image: {
    width: 130,
    height: 65,
  },
  right: {
    marginStart: 10,
    marginEnd: 10,
  },
  content: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 10,
    marginTop: 10,
  },
  reline: {
    borderBottomColor: '#FF3300',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default React.memo(ItemNew);
