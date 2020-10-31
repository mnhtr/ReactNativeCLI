import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemNew from './ItemNew';

const News = () => {
  const renderNew = ({item}) => <ItemNew item={item} />;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const getNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news,cbc-news,nbc-news,fox-news,mtv-news=&page=${page}&pageSize=8&apiKey=a94fefd1bd9b4c0e875af1a68ca958aa`,
    );
    const jsonData = await response.json();
    setData(data.concat(jsonData.articles));
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  const loadMore = () => {
    return (
      <View>
        <ActivityIndicator color="#0000ff" size="large" loading={loading} />
      </View>
    );
  };
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#1d2236" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Worldwide News</Text>
        <FlatList
          showsVerticalScrollIndicator={true}
          data={data}
          renderItem={renderNew}
          keyExtractor={(item) => item.url}
          onEndReached={getNews}
          onEndReachedThreshold={1}
          ListFooterComponent={loadMore}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginStart: 10,
    marginVertical: 10,
    color: '#FF6633',
  },
});

export default News;
