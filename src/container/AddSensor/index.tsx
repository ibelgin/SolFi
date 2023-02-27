import React, {memo} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Container from 'layout/Container';
import Header from 'components/Header';
import {useNavigation} from '@react-navigation/native';
import Text from 'components/Text';
import TitleInput from 'components/TitleInput';
import {IMAGE} from 'images';
import ButtonIconText from 'components/ButtonIconText';
import {Constants} from 'configs';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface AddSensorProps {}

const AddSensor = memo((_props: AddSensorProps) => {
  const navigate = useNavigation();

  return (
    <Container>
      <View style={styles.tempview} />
      <Header title="Add Sensor" navigation={navigate} />
      <Text description style={styles.instructiontext}>
        Check the backside of the Device for the Serial Number
      </Text>
      <Image
        source={require('../../images/serialprototype.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TitleInput
        title="Serial Number"
        placeholder="78GHSD-KSU80-HKSB82"
        style={styles.sensorinput}
      />
      <ButtonIconText title={'Add Sensor'} />
    </Container>
  );
});

const styles = StyleSheet.create({
  tempview: {},
  instructiontext: {
    paddingHorizontal: 20,
    fontSize: 15,
    lineHeight: 20,
  },
  image: {
    height: 400,
    width: Constants.width,
  },
  sensorinput: {
    marginTop: 20,
  },
});

export default AddSensor;
