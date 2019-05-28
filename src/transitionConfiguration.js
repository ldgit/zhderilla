import { Easing, Animated } from 'react-native';

// https://medium.com/async-la/custom-transitions-in-react-navigation-2f759408a053
export default () => ({
  transitionSpec: {
    duration: 750,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: (sceneProps) => {
    const { layout, position, scene } = sceneProps;

    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    });

    return {
      transform: [
        { translateX },
      ],
    };
  },
});
