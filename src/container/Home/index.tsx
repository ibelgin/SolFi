import React, {memo, useState, useEffect} from 'react';
import {Image, Pressable, StyleSheet, View, FlatList} from 'react-native';
import Container from 'layout/Container';
import {useNavigation} from '@react-navigation/native';
import Text from 'components/Text';
import {IMAGE} from 'images';
import Theme from 'style/Theme';
import {Colors, Routes} from 'configs';
import SensorComponent from 'components/SensorComponent';
import TitleTextButton from 'components/TitleTextButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeCard from 'components/HomeCard';
import {useSelector} from 'react-redux';

interface HomeProps {}

const Home = memo((_props: HomeProps) => {
  const navigate = useNavigation();
  const userData = useSelector((state: any) => state.writeData);

  const [sensorData, setSensorData] = useState({
    id: 'KHSGF-34KJH-43HJ4-43KJH',
    title: "Carrot's Hub",
    battery: '100',
  });

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Add Product',
      img: 'https://cdn.dribbble.com/users/844597/screenshots/7370239/media/41b529d7059fbce7824e56dc2e59cb73.png?compress=1&resize=1600x1200&vertical=top',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Check Sensors',
      img: 'https://cdn.dribbble.com/users/114506/screenshots/2334991/media/b3d4280179f503de478ad3a55af9c049.png?compress=1&resize=800x600&vertical=top',
    },
  ];

  useEffect(() => {
    console.log(userData);
  }, []);

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
      <FlatList
        data={DATA}
        renderItem={HomeCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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
