import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from 'navigation';
import {StatusBar, View} from 'react-native';
import Theme from 'style/Theme';
import {Colors} from 'configs';
import {Provider} from 'react-redux';
import {store} from 'redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={[Theme.flexOne, {backgroundColor: Colors.White}]}>
        <StatusBar barStyle={'dark-content'} />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </View>
    </Provider>
  );
}
