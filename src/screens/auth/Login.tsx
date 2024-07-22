import { AuthScreenLayout } from 'components/layouts';
import { View } from 'react-native';
import { auth } from 'styles';
import { Col0, Col12, Col20 } from 'components/containers';
import { Medium36, Semi36 } from 'components/typo';

function Login() {
  return (
    <AuthScreenLayout>
      <View style={auth.bottomSection}>
        <Col20>
          <Col12>
            <Col0>
              <Medium36>전시상황을 위한</Medium36>
              <Semi36>최고의 도우미</Semi36>
            </Col0>
          </Col12>

        </Col20>
      </View>
    </AuthScreenLayout>
  );
}

export default Login;
