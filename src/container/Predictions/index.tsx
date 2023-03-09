import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';

interface PredictionsProps {}

const Predictions = memo((_props: PredictionsProps) => {
  return (
    <Container>
      <View style={styles.tempview} />
    </Container>
  );
});

const styles = StyleSheet.create({
  tempview: {},
});

export default Predictions;
