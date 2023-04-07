import React, {memo} from 'react';
import {StyleSheet, View, Image, FlatList} from 'react-native';
import StorageComponent from 'components/StorageComponent';
import Container from 'layout/Container';
import SearchBar from 'components/SearchBar';
import TitleTextButton from 'components/TitleTextButton';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'configs';
import Text from 'components/Text';
import Theme from 'style/Theme';
import {IMAGE} from 'images';
import {Routes} from 'configs';
import {useSelector} from 'react-redux';

interface CropStocksProps {}

const CropStocks = memo((_props: CropStocksProps) => {
  const navigate = useNavigation();
  const DATA = useSelector((state: any) => state.stock);

  return (
    <Container>
      <TitleTextButton
        title="Storage"
        buttonText="Add Stocks"
        onPress={() => navigate.navigate(Routes.AddStock)}
      />
      <SearchBar style={styles.search} placeholder="Search Storage" />
      <View style={styles.overview}>
        <Image source={IMAGE.box} style={styles.itemimage} />
        <View style={styles.itemtext}>
          <Text description>Total Products</Text>
          <Text heading>{DATA.length}</Text>
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
