import { AuthScreenLayout } from 'components/layouts';
import { Col0, Col20, Col8, Row0 } from 'components/containers';
import { Bold28, Medium28, Semi16 } from 'components/typo';
import { ToggleWideBtn, WideBtn } from 'components/buttons';
import { useCallback, useEffect, useState } from 'react';
import { ActiveLocationPing, DisabledLocationPing } from 'assets/buttonIcons';
import { check, RESULTS } from 'react-native-permissions';
import { View } from 'react-native';
import { auth } from 'styles';
import { useNavigation } from '@react-navigation/native';

function RequestLocationPermission() {
  const navigation = useNavigation();
  const [isAccess, setIsAccess] = useState(false);
  const locationPermissionHandler = useCallback(async () => {
    if (!isAccess) {
      const checkRes = await check('android.permission.ACCESS_FINE_LOCATION');
      if (checkRes === RESULTS.GRANTED) {
        setIsAccess(true);
      } else {
        console.log(checkRes);
      }
    }
  }, [isAccess]);
  useEffect(() => {
    locationPermissionHandler();
  }, [locationPermissionHandler]);
  return (
    <AuthScreenLayout>
      <Col20 alignItems="center" width="100%">
        <Col8 alignItems="center">
          <Col0 alignItems="center">
            <Row0>
              <Bold28>위치 권한 요청</Bold28>
              <Medium28>을</Medium28>
            </Row0>
            <Medium28>허용해주세요</Medium28>
          </Col0>
          <Semi16 color="textGray">앱을 사용하기 위해 꼭 필요합니다</Semi16>
        </Col8>
        <ToggleWideBtn
          onPress={locationPermissionHandler}
          type="white"
          contents="위치 권한 허용하기"
          isToggle={isAccess}
          Icon={<DisabledLocationPing />}
          ToggledIcon={<ActiveLocationPing />}
          disabled={isAccess}
        />
      </Col20>
      <View style={auth.bottomSection}>
        <WideBtn
          onPress={() => {
            navigation.navigate('LoginSuccess');
          }}
          type={isAccess ? 'primary' : 'disabled'}
          contents="다음 단계"
        />
      </View>
    </AuthScreenLayout>
  );
}

export default RequestLocationPermission;
