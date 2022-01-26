import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = (value: number) => {
  const opacity = useRef(new Animated.Value(value)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return { opacity, fadeIn, fadeOut };
};
