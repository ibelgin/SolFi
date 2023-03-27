import React, {memo} from 'react';
import {StyleSheet, View, Image, FlatList} from 'react-native';
import StorageComponent from 'components/StorageComponent';
import Container from 'layout/Container';
import SearchBar from 'components/SearchBar';
import TitleTextButton from 'components/TitleTextButton';
import {Colors} from 'configs';
import Text from 'components/Text';
import Theme from 'style/Theme';
import {IMAGE} from 'images';

interface CropStocksProps {}

const CropStocks = memo((_props: CropStocksProps) => {
  const DATA = [
    {
      id: 'KHSGF-34KJH-43HJ4-43KJH',
      title: "Carrot's Hub",
      active: true,
      battery: '38',
    },
  ];

  return (
    <Container>
      <TitleTextButton title="Storage" buttonText="Add Stocks" />
      <SearchBar style={styles.search} placeholder="Search Storage" />
      <View style={styles.overview}>
        <Image source={IMAGE.box} style={styles.itemimage} />
        <View style={styles.itemtext}>
          <Text description>Total Products</Text>
          <Text heading>30</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={StorageComponent}
        keyExtractor={item => item.id}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  search: {
    marginTop: 10,
  },
  overview: {
    height: 100,
    margin: 20,
    backgroundColor: Colors.White,
    borderRadius: 10,
    ...Theme.flexRow,
  },
  itembox: {
    height: 100,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.LightGray,
  },
  itemimage: {
    height: 80,
    width: 80,
  },
  itemtext: {
    margin: 20,
  },
});

export default CropStocks;
