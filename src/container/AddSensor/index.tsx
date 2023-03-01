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
import Strings from './messages.en';

interface AddSensorProps {}

const AddSensor = memo((_props: AddSensorProps) => {
  const navigate = useNavigation();

  return (
    <Container>
      <View style={styles.tempview} />
      <Header title={Strings.TITLE} navigation={navigate} />
      <Text description style={styles.instructiontext}>
        {Strings.DESC}
      </Text>
      <Image
        source={IMAGE.serialprotoype}
        style={styles.image}
        resizeMode="contain"
      />
      <TitleInput
        title={Strings.SERIAL}
        placeholder={Strings.ID}
        style={styles.sensorinput}
      />
      <ButtonIconText title={Strings.TITLE} />
    </Container>
  );
});

const styles = StyleSheet.create({
  tempview: {},
  instructiontext: {
    paddingHorizontal: 20,
    fontSize: 18,
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
