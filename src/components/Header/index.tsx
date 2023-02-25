import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

import Theme from 'style/Theme';

import Text from 'components/Text';
import Icon from 'react-native-vector-icons/AntDesign';
interface HeaderProps {
  title: string;
  navigation: any;
}

const Header = memo(({title, navigation}: HeaderProps) => (
  <View style={styles.container}>
    <Icon name="left" size={20} onPress={() => navigation.goBack()} />
    <Text style={styles.header}>{title}</Text>
  </View>
));

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 80,
    ...Theme.flexRow,
  },
  header: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
});
