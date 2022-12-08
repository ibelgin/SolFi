import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';
import ButtonText from 'components/ButtonText';
import {Colors} from 'configs';
import Strings from './messages.en';

import AntDesign from 'react-native-vector-icons/AntDesign';

interface LoginProps {}

const Login = memo((_props: LoginProps) => {
  return (
    <Container>
      <View style={styles.illustration_view} />
      <ButtonText
        onPress={() => console.log()}
        icon={
          <AntDesign name={Strings.ICON_NAME} size={24} color={Colors.White} />
        }
        title={Strings.SIGN_IN}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  illustration_view: {},
});

export default Login;
