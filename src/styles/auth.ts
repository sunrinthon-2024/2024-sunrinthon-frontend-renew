import { StyleSheet } from 'react-native';

const auth = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  bottomSection: {
    width: '100%',
    position: 'absolute',
    paddingBottom: 20,
    bottom: 0,
  },
});

export default auth;
