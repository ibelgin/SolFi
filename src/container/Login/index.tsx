import React, {memo, useEffect, useRef} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Container from 'layout/Container';
import ButtonIconText from 'components/ButtonIconText';
import {Colors, Constants, Routes} from 'configs';
import Strings from './messages.en';
import Text from 'components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import {Assets} from 'assets';
import {useDispatch} from 'react-redux';
import {setUser} from 'redux/userSlice';

import {signInWithGoogle} from 'utils/google-signin';

interface LoginProps {}

const Login = memo((_props: LoginProps) => {
  const animationRef = useRef<Lottie>(null);
  const dispatch = useDispatch();
  const navigate = useNavigation();

  async function signIn() {
    try {
      const data = await signInWithGoogle();
      dispatch(setUser(data.user));
      navigate.navigate(Routes.Tabs);
    } catch {
      Alert.alert(Strings.SOLFI, Strings.ERROR);
    }
  }

  useEffect(() => {
    animationRef.current?.play(130, 350);
  }, []);

  return (
    <Container style={styles.container}>
      <View style={styles.illustration_view}>
        <Lottie
          ref={animationRef}
          loop={true}
          autoPlay
          source={Assets.floatingJson}
        />
      </View>
      <Text paddingTop={90} paddingHorizontal={20} heading>
        {Strings.WELCOME}
      </Text>
      <Text padding={20} description>
        {Strings.DESC}
      </Text>
      <ButtonIconText
        onPress={() => signIn()}
        icon={
          <AntDesign name={Strings.ICON_NAME} size={24} color={Colors.White} />
        }
        title={Strings.SIGN_IN}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: Colors.White,
  },
  illustration_view: {
    height: Constants.height / 2,
    width: Constants.width,
  },
});

export default Login;
