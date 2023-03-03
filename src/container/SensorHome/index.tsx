import React, {memo, useState} from 'react';
import {StyleSheet} from 'react-native';
import Container from 'layout/Container';
import {Colors} from 'configs';
import Text from 'components/Text';
import Strings from './messages.en';
import SearchBar from 'components/SearchBar';

interface SensorHomeProps {}

const SensorHome = memo((_props: SensorHomeProps) => {
  const [search, setSearch] = useState('');

  return (
    <Container style={styles.container}>
      <Text paddingTop={40} paddingHorizontal={20} heading>
        {Strings.SEN}
      </Text>
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder={Strings.SER}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});

export default SensorHome;
