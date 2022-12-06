import React, {memo} from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ColorValue,
} from 'react-native';

import {Colors} from 'configs';
import Theme from 'style/Theme';

interface ButtonTextProps {
  title?: string;
  style?: ViewStyle;
  titleColor?: string;
  textProps?: TextProps;
  onPress?: () => void;
  borderColor?: ColorValue | string;
  backgroundColor?: ColorValue | string;
  icon: any;
}

const ButtonText = memo(
  ({
    backgroundColor = Colors.Primary,
    title,
    style,
    titleColor = Colors.White,
    onPress,
    icon,
  }: ButtonTextProps) => (
    <>
      <TouchableOpacity
        style={[styles.container, {backgroundColor: backgroundColor, ...style}]}
        onPress={onPress}
        activeOpacity={0.54}>
        {icon}
        <Text style={[styles.text, {color: titleColor}]}>{title}</Text>
      </TouchableOpacity>
    </>
  ),
);

export default ButtonText;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 70,
    borderRadius: 10,
    ...Theme.flexDirection,
    ...Theme.center,
  },
  text: {
    fontWeight: '500',
    fontSize: 17,
    marginLeft: 20,
  },
});
