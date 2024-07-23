import { AuthScreenLayout } from 'components/layouts';
import { View, StyleSheet } from 'react-native';
import { auth } from 'styles';
import { Col0, Col12, Col20, Row5 } from 'components/containers';
import { Medium36, Semi36 } from 'components/typo';
import { WideBtn } from 'components/buttons';
import { GoogleLogo, ImageLogo, TextLogo } from 'assets/logos';
import { LoginBackgroundImage } from 'assets';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const localStyle = StyleSheet.create({
    backgroundImageContainer: {
      alignItems: 'center',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 12,
      zIndex: -1,
    },
  });
  const googleLoginHandler = () => {
    // googleLoginLogic
    navigation.navigate('RequestLocationPermission');
  };
  return (
    <AuthScreenLayout>
      <View style={auth.bottomSection}>
        <Col20>
          <Col12>
            <Row5 alignItems="center">
              <ImageLogo />
              <TextLogo />
            </Row5>
            <Col0>
              <Medium36>전시상황을 위한</Medium36>
              <Semi36>최고의 도우미</Semi36>
            </Col0>
          </Col12>
          <WideBtn
            onPress={googleLoginHandler}
            type="white"
            contents="Google로 시작하기"
            Icon={<GoogleLogo />}
          />
        </Col20>
      </View>
      <View style={localStyle.backgroundImageContainer}>
        <LoginBackgroundImage />
      </View>
    </AuthScreenLayout>
  );
}

export default Login;
