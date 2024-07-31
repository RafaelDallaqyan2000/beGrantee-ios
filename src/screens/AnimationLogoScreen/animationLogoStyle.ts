import {StyleSheet} from 'react-native';

export const animationLogoStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  aplicationName: {
    fontFamily: 'Noto Sans Armenian',
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 54,
    letterSpacing: 0.96,
    color: '#324054',
  },
  animationContainer: {
    width: 186,
    height: 186,
  },

  firstCube: {
    width: 88,
    height: 88,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  secondCube: {
    width: 89,
    height: 89,
    top: 97,
    right: 0,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    position: 'absolute',
  },
  thirdCube: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    position: 'absolute',
  },
  fourthCube: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    position: 'absolute',
  },
  fifthCube: {
    width: 79,
    height: 79,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: 0,
  },
});
