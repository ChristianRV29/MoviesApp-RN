import React from 'react';
import { StyleSheet, View } from 'react-native';

import Lineargradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Lineargradient
        colors={['#084F6A', '#75CEDB', 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
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
