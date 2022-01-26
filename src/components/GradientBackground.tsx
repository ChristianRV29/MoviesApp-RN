import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
  return <View style={styles.mainContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#084F6A',
  },
});

export default GradientBackground;
