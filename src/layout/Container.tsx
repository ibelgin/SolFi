import React from 'react';
import {
  SafeAreaView as DefaultView,
  ViewProps,
  ViewStyle,
  ScrollView,
  PressableStateCallbackType,
} from 'react-native';

interface Props extends ViewProps {
  children?:
    | React.ReactNode
    | ((state: PressableStateCallbackType) => React.ReactNode);
  style?: ViewStyle;
}

const Container = (props: Props) => (
  <DefaultView style={[{flex: 1}, props.style]}>
    <ScrollView>{props.children}</ScrollView>
  </DefaultView>
);

export default Container;
