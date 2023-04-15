import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'layout/Container';
import {useNavigation} from '@react-navigation/native';
import TitleTextButton from 'components/TitleTextButton';
import {WINDOW_WIDTH} from 'shared/global/constants';
import {Colors} from 'configs';
import {LineChart} from 'react-native-chart-kit';
import Text from 'components/Text';

interface PredictionsProps {}

const Predictions = memo((_props: PredictionsProps) => {
  const navigate = useNavigation();

  let HumidityData = {
    labels: ['1:00 PM', '1:05 PM', '1:10 PM', '1:15 PM', '1:20 PM', '1:25 PM'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };

  let Temprature = {
    labels: ['1:00 PM', '1:05 PM', '1:10 PM', '1:15 PM', '1:20 PM', '1:25 PM'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };

  const chartConfig = {
    color: () => '#30A699',
    strokeWidth: 2,
    barPercentage: 0.5,
    backgroundColor: Colors.DarkGreen,
  };

  return (
    <Container>
      <Text style={styles.header} heading>
        {'Predictions for Tommorow'}
      </Text>
      <Text style={styles.desc} description>
        The predictions for the next day is given below
      </Text>
      <TitleTextButton
        title="Soil Humidity for Next Day"
        buttonText="See All"
      />
      <LineChart
        data={HumidityData}
        width={WINDOW_WIDTH + 30}
        transparent
        height={256}
        chartConfig={chartConfig}
        withVerticalLines={false}
        withHorizontalLines={false}
        bezier
        style={styles.chart}
      />
      <TitleTextButton
        title="Soil Moisture for Next Day"
        buttonText="See All"
      />
      <LineChart
        data={Temprature}
        width={WINDOW_WIDTH + 30}
        transparent
        height={256}
        chartConfig={chartConfig}
        withVerticalLines={false}
        withHorizontalLines={false}
        bezier
        style={styles.chart}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  chart: {
    marginTop: 30,
  },
  header: {
    marginLeft: 20,
    marginTop: 20,
  },
  desc: {
    marginLeft: 20,
    marginTop: 5,
  },
});

export default Predictions;
