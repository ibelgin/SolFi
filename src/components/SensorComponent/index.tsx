import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Colors} from 'configs';
import Theme from 'style/Theme';
import Entypo from 'react-native-vector-icons/Entypo';
import Text from 'components/Text';
import {batteryCheck} from 'utils/battery-check';

interface SensorComponentProps {
  item?: any;
}

const SensorComponent = ({item}: SensorComponentProps) => {
  const isEmpty = batteryCheck(item.battery) == 'progress-empty';
  const isActive = !(Number(item.battery) < 2);
  return (
    <View style={styles.item}>
      {!(item.title === undefined) ? (
        <>
          <View style={Theme.flexRow}>
            <View
              style={{
                ...styles.line,
                backgroundColor: isActive ? Colors.Primary : Colors.LightRed,
              }}
            />
            <View>
              <Text onPress={() => console.log(item)} style={styles.title}>
                {item.title}
              </Text>
              <Text style={styles.desc} description>
                {item.id}
              </Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={Theme.flexRow}>
              <Entypo size={15} name="circular-graph" color={Colors.Primary} />
              <Text style={styles.id} description>
                {isActive ? 'Active' : 'Not Active'}
              </Text>
            </View>
            <View style={Theme.flexRowCenter}>
              <Text
                style={{
                  ...styles.battery,
                  color: isEmpty ? Colors.LightRed : Colors.Primary,
                }}>
                {item.battery}%{' '}
              </Text>
              <Entypo
                size={15}
                name={batteryCheck(item.battery)}
                color={isEmpty ? Colors.LightRed : Colors.Primary}
              />
            </View>
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

export default SensorComponent;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    ...Theme.flexDirection,
    ...Theme.center,
  },
  text: {
    fontWeight: '500',
    fontSize: 17,
    color: Colors.Primary,
  },
  item: {
    margin: 20,
    marginVertical: 10,
    height: 120,
    padding: 20,
    borderRadius: 15,
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    ...Theme.shadow,
  },
  title: {
    color: Colors.HeaderGreen,
    fontWeight: '500',
    marginLeft: 10,
    fontSize: 18,
  },
  desc: {
    marginLeft: 10,
    fontSize: 12,
    marginTop: 5,
    color: Colors.Gray,
  },
  id: {
    fontSize: 14,
    marginLeft: 10,
  },
  line: {
    height: 40,
    width: 5,
    borderRadius: 10,
  },
  content: {
    ...Theme.flexRowSpace,
  },
  battery: {
    color: Colors.Primary,
    fontSize: 12,
  },
});
