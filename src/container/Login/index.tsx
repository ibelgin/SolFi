import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';

interface LoginProps {}

const Login = memo((_props: LoginProps) => {
  return (
    <Container>
      <View style={styles.illustration_view} />
    </Container>
  );
});

const styles = StyleSheet.create({
  illustration_view: {},
});

export default Login;
