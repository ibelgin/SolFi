import React, {memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import Text from 'components/Text';
import Theme from 'style/Theme';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'configs';

interface SettingCardProps {
  icon?: string;
  title?: string;
  route?: string;
  heading?: boolean;
  headingTitle?: string;
}

const SettingCard = memo(
  ({icon, title, route, heading, headingTitle}: SettingCardProps) => {
    const {navigate} = useNavigation();

    return (
      <Pressable onPress={() => navigate(route)}>
        {heading ? (
          <View style={styles.header}>
            <Text style={styles.headingtext}>{headingTitle}</Text>
          </View>
        ) : (
          <View style={styles.content}>
            <View style={Theme.flexRow}>
              <AntDesign name={icon} size={20} />
              <Text style={styles.subheading}>{title}</Text>
            </View>
            <AntDesign name={'right'} size={17} />
          </View>
        )}
      </Pressable>
    );
  },
);

export default SettingCard;

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: Colors.LightGray,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  headingtext: {
    color: Colors.Gray,
  },
  content: {
    height: 65,
    ...Theme.flexRowSpace,
    paddingHorizontal: 20,
  },
  subheading: {
    fontSize: 17,
    paddingLeft: 15,
  },
});
