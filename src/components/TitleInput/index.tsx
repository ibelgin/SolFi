import React, {memo} from 'react';
import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';

import {Colors} from 'configs';

import Text from 'components/Text';
interface TitleInputProps {
  title: string;
  placeholder: string;
  style?: TextInputProps;
}

const TitleInput = memo(({title, placeholder, style}: TitleInputProps) => (
  <View
    style={[
      styles.container,
      {
        ...style,
      },
    ]}>
    <Text style={styles.title}>{title}</Text>
    <TextInput style={styles.textinput} placeholder={placeholder} />
  </View>
));

export default TitleInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  textinput: {
    height: 50,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: Colors.Primary,
    marginVertical: 8,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    color: '#',
    fontWeight: '600',
  },
});
