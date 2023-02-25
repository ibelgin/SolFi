import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';
import Header from 'components/Header';
import {useNavigation} from '@react-navigation/native';
import Text from 'components/Text';
import TitleInput from 'components/TitleInput';

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
      <TitleInput title="Email" placeholder="test@test.com" />
    </Container>
  );
});

const styles = StyleSheet.create({
  tempview: {},
  instructiontext: {
    paddingHorizontal: 20,
    fontWeight: '500',
  },
});

export default AddSensor;
