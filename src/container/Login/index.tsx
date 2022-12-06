import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';
import ButtonText from 'components/ButtonText';

interface LoginProps {}

const Login = memo((_props: LoginProps) => {
  return (
    <Container>
      <View style={styles.illustration_view} />
      <ButtonText
        onPress={() => console.log('Testing')}
        iconName="google"
        title="Sign In With Google"
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  illustration_view: {},
});

export default Login;
