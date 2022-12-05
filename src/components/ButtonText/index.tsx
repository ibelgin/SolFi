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
}

const ButtonText = memo(
  ({
    backgroundColor = Colors.Primary,
    title,
    style,
    titleColor = Colors.White,
    onPress,
    ...textProps
  }: ButtonTextProps) => {
    return (
      <TouchableOpacity
        style={[styles.container, {backgroundColor: backgroundColor, ...style}]}
        onPress={onPress}
        activeOpacity={0.54}>
        <Text style={{color: titleColor}} {...textProps}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

export default ButtonText;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 70,
    borderRadius: 12,
    ...Theme.center,
  },
});
