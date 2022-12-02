import React, {memo} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import createActions from 'redux/createActions';

interface LoginProps {}

const Login = memo((props: LoginProps) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    console.log(count);
    dispatch(createActions('NAME', {name: 'testing'}));
  };

  const count = useSelector((state: any) => state.writeData);

  return (
    <View style={styles.container}>
      <Pressable onPress={handleIncrement}>
        <Text style={styles.greeting} testID="name-printed">
          Hello
        </Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default Login;
