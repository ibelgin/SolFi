import React, {memo, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Container from 'layout/Container';
import Header from 'components/Header';
import {useNavigation} from '@react-navigation/native';
import Text from 'components/Text';
import TitleInput from 'components/TitleInput';
import {IMAGE} from 'images';
import ButtonIconText from 'components/ButtonIconText';
import {Constants} from 'configs';
// import {writeData} from 'utils/database';

interface AddStockProps {}

const AddStock = memo((_props: AddStockProps) => {
  const navigate = useNavigation();

  useEffect(() => {
    // writeData();
  }, []);

  return (
    <Container>
      <View style={styles.tempview} />
      <Header title={'Add New Stock'} navigation={navigate} />
      <Text description style={styles.instructiontext}>
        Add a New Stock with the quanity and keep record of the stocks
      </Text>
      <Image source={IMAGE.box} style={styles.image} resizeMode="contain" />
      <TitleInput
        title={'Stock Name'}
        placeholder={'Enter the Name of the Stock'}
        style={styles.sensorinput}
      />
      <TitleInput
        title={'Quantity of the Stock'}
        placeholder={'Enter the Quantity of the Stock'}
        style={styles.sensorinput}
      />
      <ButtonIconText title={'Add Stock to Inventory'} />
    </Container>
  );
});

const styles = StyleSheet.create({
  tempview: {},
  instructiontext: {
    paddingHorizontal: 20,
    fontSize: 18,
    lineHeight: 20,
  },
  image: {
    height: 300,
    width: Constants.width - 150,
    alignSelf: 'center',
  },
  sensorinput: {
    marginTop: 20,
  },
});

export default AddStock;
