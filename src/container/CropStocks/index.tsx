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
      image:
        'https://cdn.dribbble.com/users/115601/screenshots/921181/media/53c4041fea260324cb63f343cf3bc4eb.png?compress=1&resize=400x300&vertical=top',
      title: 'Maize',
      quantity: '120 Kg',
    },
    {
      image:
        'https://cdn.dribbble.com/userupload/4065779/file/original-5f15612da46cd196b76c6419b02c540c.png?compress=1&resize=1504x1128',
      title: "Watermelon's",
      quantity: '40 Kg',
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
    marginVertical: 10,
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
