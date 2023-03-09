import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {Routes} from 'configs';
import Home from 'container/Home';
import SensorHome from 'container/SensorHome';
import Predictions from 'container/Predictions';
import CropStocks from 'container/CropStocks';
import Settings from 'container/Settings';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName={Routes.Home}
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#00C1AD',
      tabBarStyle: {borderTopWidth: 0, elevation: 0},
    }}>
    <Tab.Screen
      name={Routes.Home}
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Feather name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={Routes.SensorHome}
      component={SensorHome}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Feather name="server" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={Routes.CropStocks}
      component={CropStocks}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Feather name="box" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={Routes.Predictions}
      component={Predictions}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Entypo name="line-graph" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={Routes.Settings}
      component={Settings}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Feather name="settings" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
