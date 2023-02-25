import React, {memo} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {Colors} from 'configs';

import Text from 'components/Text';
interface TitleInputProps {
  title: string;
  placeholder: string;
}

const TitleInput = memo(({title, placeholder}: TitleInputProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TextInput style={styles.textinput} placeholder={placeholder} />
  </View>
));

export default TitleInput;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textinput: {
    height: 50,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: Colors.LightDarkGreen,
    marginVertical: 8,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    color: Colors.LightDarkGreen,
    fontWeight: '400',
  },
});
