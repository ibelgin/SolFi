import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Text from 'components/Text';

interface HomeCardProps {
  item?: any;
}

const HomeCard = ({item}: HomeCardProps) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.img,
        }}
        style={styles.img}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  item: {
    height: 200,
    width: 250,
  },
  img: {
    margin: 20,
    height: 130,
    borderRadius: 13,
  },
  text: {
    fontWeight: '500',
    paddingHorizontal: 20,
  },
});
