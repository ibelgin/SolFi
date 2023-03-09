import React, {memo} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Colors, Routes} from 'configs';
import {useNavigation} from '@react-navigation/native';
import SettingCard from 'components/SettingCard';
import {IMAGE} from 'images';
import Container from 'layout/Container';
import Text from 'components/Text';
import Theme from 'style/Theme';

interface SettingsProps {}

const Settings = memo((_props: SettingsProps) => {
  const navigate = useNavigation();

  return (
    <Container style={styles.container}>
      <Image
        source={IMAGE.textLogo}
        style={styles.image}
        resizeMode="contain"
      />
      <SettingCard headingTitle="ABOUT US" heading />
      <SettingCard icon="hearto" title="Liked" route={Routes.AddSensor} />
      <View style={Theme.center}>
        <Text style={styles.heading}>SolFi @ 2022</Text>
      </View>
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingTop: 40,
  },
  image: {
    height: 100,
    width: 150,
  },
  heading: {
    fontSize: 15,
    padding: 10,
    color: Colors.Gray,
  },
});

export default Settings;
