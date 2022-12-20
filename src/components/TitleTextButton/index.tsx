import React, {memo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {Colors} from 'configs';
import Theme from 'style/Theme';

interface TitleTextButtonProps {
  title?: string;
  buttonText?: string;
}

const TitleTextButton = memo(({title, buttonText}: TitleTextButtonProps) => (
  <>
    <View style={styles.container}>
      <View style={styles.title_view}>
        <Text>{title}</Text>
      </View>
      <TouchableOpacity style={styles.button_style}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  </>
));

export default TitleTextButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    ...Theme.flexDirection,
  },
  titlestyle: {
    color: Colors.Black,
  },
  title_view: {
    width: '50%',
    height: '100%',
  },
  button_style: {
    height: 20,
    width: 100,
  },
});
