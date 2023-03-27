import React from 'react';
import {StyleSheet, View} from 'react-native';

import Theme from 'style/Theme';
import Text from 'components/Text';

interface StorageComponentProps {
  item?: any;
}

const StorageComponent = ({item}: StorageComponentProps) => {
  return (
    <View style={styles.item}>
      {!(item.title === undefined) ? (
        <>
          <View style={Theme.flexRow}>
            <Text>{item.title}</Text>
          </View>
        </>
      ) : (
        <View style={{...Theme.center, padding: 20}}>
          <Text description>No Sensor Data</Text>
        </View>
      )}
    </View>
  );
};

export default StorageComponent;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    ...Theme.flexDirection,
    ...Theme.center,
  },
});
