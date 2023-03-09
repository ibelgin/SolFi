import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';

interface CropStocksProps {}

const CropStocks = memo((_props: CropStocksProps) => {
  return (
    <Container>
      <View style={styles.tempview} />
    </Container>
  );
});

const styles = StyleSheet.create({
  tempview: {},
});

export default CropStocks;
