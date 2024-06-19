import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {animationLogoStyle} from './animationLogoStyle';
import {
  fifthCubeAnimation,
  firstCubeAnimation,
  fourthCubeAnimation,
  secondCubeAnimation,
  showAppNameWithAnimation,
  thirdCubeAnimation,
} from './animationsDelalay';

type showCubes = {
  showThird?: boolean;
  showFourth?: boolean;
  showFifth?: boolean;
};

const LogoAnimation = () => {
  const [showAnimationCubes, setShowAnimationCubes] = useState({});
  const {showThird, showFourth, showFifth}: showCubes = showAnimationCubes;

  useEffect(() => {
    setTimeout(() => {
      setShowAnimationCubes(prev => {
        return {showThird: true, ...prev};
      });
    }, 800);

    setTimeout(() => {
      setShowAnimationCubes(prev => {
        return {showFourth: true, ...prev};
      });
    }, 1100);

    setTimeout(() => {
      setShowAnimationCubes(prev => {
        return {showFifth: true, ...prev};
      });
    }, 1600);
  }, []);

  return (
    <View style={animationLogoStyle.container}>
      <View style={animationLogoStyle.animationContainer}>
        <Animatable.View
          animation={firstCubeAnimation}
          duration={1000}
          style={animationLogoStyle.firstCube}>
          <Text style={{fontSize: 48, color: '#fff'}}>B</Text>
        </Animatable.View>

        <Animatable.View
          animation={secondCubeAnimation}
          duration={4000}
          style={animationLogoStyle.secondCube}>
          <Text style={{fontSize: 48, color: '#FFF'}}>G</Text>
        </Animatable.View>

        {showThird && (
          <Animatable.View
            animation={thirdCubeAnimation}
            duration={2000}
            style={animationLogoStyle.thirdCube}
          />
        )}

        {showFourth && (
          <Animatable.View
            animation={fourthCubeAnimation}
            duration={2000}
            style={animationLogoStyle.fourthCube}
          />
        )}

        {showFifth && (
          <Animatable.View
            animation={fifthCubeAnimation}
            duration={2000}
            style={animationLogoStyle.fifthCube}
          />
        )}
      </View>
      <Animatable.View animation={showAppNameWithAnimation} duration={2000}>
        <Text style={animationLogoStyle.aplicationName}>BeGrantee</Text>
      </Animatable.View>
    </View>
  );
};

export default LogoAnimation;
