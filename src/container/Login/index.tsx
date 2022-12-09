import React, {memo, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';
import ButtonText from 'components/ButtonText';
import {Colors} from 'configs';
import Strings from './messages.en';
import {initialConfig, signIn} from 'utils/google-signin';

import AntDesign from 'react-native-vector-icons/AntDesign';

interface LoginProps {}

const Login = memo((_props: LoginProps) => {
  useEffect(() => {
    initialConfig();
  });

  return (
    <Container>
      <View style={styles.illustration_view} />
      <ButtonText
        onPress={() =>
          signIn().then(val => {
            console.log(val);
          })
        }
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
