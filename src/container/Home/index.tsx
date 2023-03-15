import React, {memo, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import Container from 'layout/Container';
import {useNavigation} from '@react-navigation/native';
import Text from 'components/Text';
import {IMAGE} from 'images';
import Theme from 'style/Theme';
import {Colors, Routes} from 'configs';
import SensorComponent from 'components/SensorComponent';
import TitleTextButton from 'components/TitleTextButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface HomeProps {}

const Home = memo((_props: HomeProps) => {
  const navigate = useNavigation();
  const [sensorData, setSensorData] = useState({
    // id: 'KHSGF-34KJH-43HJ4-43KJH',
    // title: "Carrot's Hub",
    // active: true,
    // battery: '38',
  });

  return (
    <Container>
      <View style={styles.logoview}>
        <Image
          resizeMode="contain"
          source={IMAGE.textLogo}
          style={styles.image}
        />
      </View>
      <Pressable
        style={styles.addSensorCard}
        onPress={() => navigate.navigate(Routes.AddSensor)}>
        <Text style={styles.newsensor}>Add New Sensor</Text>
        <AntDesign name="plus" color={Colors.DarkGreen} size={20} />
      </Pressable>
      <TitleTextButton title="Recent Activity" buttonText="See All" />
      <SensorComponent item={sensorData} />
    </Container>
  );
});

const styles = StyleSheet.create({
  tempview: {},
  addSensorCard: {
    height: 60,
    backgroundColor: Colors.White,
    margin: 20,
    borderRadius: 5,
    padding: 20,
    ...Theme.flexRowSpace,
    borderColor: Colors.Secondary,
    borderWidth: 1,
    ...Theme.shadow,
  },
  newsensor: {
    fontSize: 19,
    color: Colors.DarkGreen,
    fontWeight: '500',
  },
  logoview: {
    ...Theme.flexRowSpace,
    paddingLeft: 10,
  },
  image: {
    height: 70,
    width: 120,
  },
});

export default Home;
