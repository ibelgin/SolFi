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

import {initialConfig, checkIfSignedIn, signIn} from 'utils/google-signin';
import {useDispatch} from 'react-redux';
import createActions from 'redux/createActions';
import {User} from 'redux/actionTypes';

interface LoginProps {}

const Login = memo((_props: LoginProps) => {
  const animationRef = useRef<Lottie>(null);
  const navigate = useNavigation();
  const dispatch = useDispatch();

  async function checkData() {
    try {
      const data = await checkIfSignedIn();
      dispatch(createActions(User.USERDATA, {userData: data.user}));
      navigate.navigate(Routes.Tabs);
    } catch {
      Alert.alert(Strings.SOLFI, Strings.ERROR);
    }
  }

  useEffect(() => {
    initialConfig();
    // checkData();
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
        onPress={() => checkData()}
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
