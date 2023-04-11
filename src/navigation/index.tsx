import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from 'configs';

// Login / SignUp Routes
import Splash from 'container/Splash';
import Login from 'container/Login';

// Sensor Routes
import AddSensor from 'container/AddSensor';
import SensorHome from 'container/SensorHome';
import SensorDetails from 'container/SensorDetails';
import AddStock from 'container/AddStock';

import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const RootStack = memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Splash}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Splash} component={Splash} />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Tabs} component={Tabs} />
      <Stack.Screen name={Routes.AddSensor} component={AddSensor} />
      <Stack.Screen name={Routes.SensorHome} component={SensorHome} />
      <Stack.Screen name={Routes.SensorDetails} component={SensorDetails} />
      <Stack.Screen name={Routes.AddStock} component={AddStock} />
    </Stack.Navigator>
  );
});

export default RootStack;
