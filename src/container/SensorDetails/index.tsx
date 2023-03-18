import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface SensorDetailsProps {}

const SensorDetails = memo((_props: SensorDetailsProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.tempview} />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  tempview: {
    flex: 1,
  },
});

export default SensorDetails;
