import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useState } from 'react';
import RootStack from 'navigation';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import Theme from 'style/Theme';
import { store } from 'redux/reducer';
import { Colors } from "configs"

export default function App() {
  return (
    <View style={[Theme.flexOne, { backgroundColor: Colors.White }]}>
      <Provider store={store}>
        <StatusBar barStyle={'dark-content'} />
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
      </Provider>
    </View>
  );
}