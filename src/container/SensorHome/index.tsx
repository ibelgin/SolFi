import React, {memo, useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Colors} from 'configs';
import Strings from './messages.en';
import SearchBar from 'components/SearchBar';
import {useNavigation} from '@react-navigation/native';
import SensorComponent from 'components/SensorComponent';
import TitleTextButton from 'components/TitleTextButton';
import {Routes} from 'configs';

interface SensorHomeProps {}

const SensorHome = memo((_props: SensorHomeProps) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigation();

  const DATA = [
    {
      id: 'KHSGF-34KJH-43HJ4-43KJH',
      title: "Carrot's Hub",
      active: true,
      battery: '38',
    },
    {
      id: 'FKSDJG-4334MN-34KH43-34',
      title: 'Paddy Hub',
      active: false,
      battery: '3',
    },
    {
      id: 'OUHI43-BJ3H4B-34KJHB-33',
      title: 'Tomato Hub',
      active: true,
      battery: '100',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TitleTextButton
        title="Sensors"
        buttonText="Add Sensor"
        onPress={() => navigate.navigate(Routes.AddSensor)}
      />
      <SearchBar
        value={search}
        onChange={setSearch}
        style={styles.search}
        placeholder={Strings.SER}
      />
      <FlatList
        style={styles.flatlist}
        data={DATA}
        renderItem={SensorComponent}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  search: {
    marginTop: 10,
  },
  flatlist: {
    marginTop: 20,
  },
});

export default SensorHome;
