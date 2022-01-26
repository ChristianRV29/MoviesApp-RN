import React, { useRef } from 'react';
import { Animated, Button, View } from 'react-native';

const FadeScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current;

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

  return (
    <View
      style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          width: 250,
          height: 250,
          borderColor: 'white',
          backgroundColor: 'blue',
          borderWidth: 20,
          opacity,
        }}
      />
      <Button title={'Fade in'} onPress={fadeIn} />
      <Button title={'Fade out'} onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
