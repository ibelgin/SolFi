import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from 'configs';

import Login from 'container/Login';
import AddSensor from 'container/AddSensor';
import SensorHome from 'container/SensorHome';
import Settings from 'container/Settings';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const RootStack = memo(() => {
  return (
    <Stack.Navigator initialRouteName={Routes.Tabs}>
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Tabs}
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.AddSensor}
        component={AddSensor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SensorHome}
        component={SensorHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
});

export default RootStack;
