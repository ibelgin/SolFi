import React, {memo, useEffect} from 'react';
import {Colors} from 'configs';
import {IMAGE} from 'images';
import {StyleSheet, Image, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Theme from 'style/Theme';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'configs';
import {initialConfig, signInWithGoogle} from 'utils/google-signin';
import {useDispatch} from 'react-redux';
import {setUser} from 'redux/userSlice';

interface SplashProps {}

const Splash = memo((_props: SplashProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  async function checkSignIn() {
    try {
      const data = await signInWithGoogle();
      dispatch(setUser(data.user));
      navigate.navigate(Routes.Tabs);
    } catch (err) {
      Alert.alert('SolFi', 'Some Error occurred');
      navigate.navigate(Routes.Login);
    }
  }
  useEffect(() => {
    initialConfig();
    checkSignIn();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={IMAGE.textLogo}
        resizeMode="contain"
        style={styles.image}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    ...Theme.center,
  },
  image: {
    height: 100,
  },
});

export default Splash;
