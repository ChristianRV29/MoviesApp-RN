import React from 'react';
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';

const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade(0.5);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
