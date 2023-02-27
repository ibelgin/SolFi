import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from 'configs';

import Login from 'container/Login';
import AddSensor from 'container/AddSensor';
import Home from 'container/Home';

const Stack = createNativeStackNavigator();

const RootStack = memo(() => {
  return (
    <Stack.Navigator initialRouteName={Routes.AddSensor}>
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.AddSensor}
        component={AddSensor}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
});

export default RootStack;
