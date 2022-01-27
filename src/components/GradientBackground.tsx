import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Lineargradient from 'react-native-linear-gradient';

import { GradientContext } from '../context/gradient';
import { useFade } from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
  const { colors, prevColors, setPrevColors } = useContext(GradientContext);

  const { opacity, fadeIn, fadeOut } = useFade(0);

  useEffect(() => {
    fadeIn(() => {
      setPrevColors(colors);
      fadeOut();
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);

  return (
    <View style={styles.mainContainer}>
      <Lineargradient
        colors={[`${prevColors.primary}`, `${prevColors.secondary}`, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <Lineargradient
          colors={[`${colors.primary}`, `${colors.secondary}`, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default GradientBackground;
