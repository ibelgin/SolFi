import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';

interface HomeProps {}

const Home = memo((_props: HomeProps) => {
  return (
    <Container>
      <View style={styles.tempview} />
    </Container>
  );
});

const styles = StyleSheet.create({
  tempview: {},
});

export default Home;
