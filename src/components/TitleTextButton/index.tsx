import React, {memo} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {Colors} from 'configs';
import Theme from 'style/Theme';

import Text from 'components/Text';
interface TitleTextButtonProps {
  title?: string;
  buttonText?: string;
  onPress: () => void;
}

const TitleTextButton = memo(
  ({title, buttonText, onPress}: TitleTextButtonProps) => (
    <>
      <View style={styles.container}>
        <View style={styles.title_view}>
          <Text heading numberOfLines={1}>
            {title}
          </Text>
        </View>
        <TouchableOpacity style={styles.button_style} onPress={onPress}>
          <Text description numberOfLines={1}>
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  ),
);

export default TitleTextButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    ...Theme.flexDirection,
    ...Theme.center,
  },
  titlestyle: {
    color: Colors.Black,
  },
  title_view: {
    width: '70%',
  },
  button_style: {
    width: '30%',
    ...Theme.flexDirection,
    ...Theme.center,
  },
});
