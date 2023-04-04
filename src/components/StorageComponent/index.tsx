import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import Theme from 'style/Theme';
import Text from 'components/Text';
import {Colors} from 'configs';
import {IMAGE} from 'images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface StorageComponentProps {
  item?: any;
}

const StorageComponent = ({item}: StorageComponentProps) => {
  return (
    <>
      {!(item.title === undefined) ? (
        <View style={styles.overview}>
          <View style={Theme.flexRow}>
            <Image source={{uri: item.image}} style={styles.itemimage} />
            <View>
              <Text description>{item.title}</Text>
              <Text heading style={{fontSize: 18}}>
                {item.quantity}
              </Text>
            </View>
          </View>
          <Pressable style={styles.del}>
            <MaterialIcons name="delete" size={20} color={Colors.LightRed} />
          </Pressable>
        </View>
      ) : (
        <View style={{...Theme.center, padding: 20}}>
          <Text description>No Sensor Data</Text>
        </View>
      )}
    </>
  );
};

export default StorageComponent;

const styles = StyleSheet.create({
  itembox: {
    height: 80,
    padding: 10,
    marginHorizontal: 20,
  },
  itemimage: {
    height: 50,
    width: 50,
    margin: 20,
    borderRadius: 10,
  },
  overview: {
    
    height: 80,
    margin: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: Colors.LightGray,
    ...Theme.flexRowSpace,
  },
  del: {
    height: 50,
    width: 50,
    ...Theme.center,
  },
});
