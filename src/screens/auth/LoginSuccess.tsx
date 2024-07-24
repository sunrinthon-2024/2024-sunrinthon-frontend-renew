import { AuthScreenLayout } from 'components/layouts';
import LottieView from 'lottie-react-native';
import { Semi16, Semi28 } from 'components/typo';
import { Col0, Col12, Col8 } from 'components/containers';
import { Animated, StyleSheet, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { auth } from 'styles';
import { WideBtn } from '@components/buttons';
import { useNavigation } from '@react-navigation/native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

function LoginSuccess() {
  const navigation = useNavigation();
  const localStyle = StyleSheet.create({
    checkIcon: {
      width: 140,
      height: 140,
    },
  });
  const animationProgress = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, []);
  // @ts-ignore
  return (
    <AuthScreenLayout>
      <Col12 alignItems="center">
        <AnimatedLottieView
          source={require('@assets/loginSuccessAnimation.json')}
          loop={false}
          progress={animationProgress.current}
          style={localStyle.checkIcon}
        />
        <Col8 alignItems="center">
          <Semi28>로그인 완료!</Semi28>
          <Col0 alignItems="center">
            <Semi16 color="textGray">당신의 생존을 위한</Semi16>
            <Semi16 color="textGray">최고의 도우미가 되어드릴게요</Semi16>
          </Col0>
        </Col8>
      </Col12>
      <View style={auth.bottomSection}>
        <WideBtn
          onPress={() => {
            navigation.navigate('Home');
          }}
          type="primary"
          contents="Statul 시작하기"
        />
      </View>
    </AuthScreenLayout>
  );
}

export default LoginSuccess;
