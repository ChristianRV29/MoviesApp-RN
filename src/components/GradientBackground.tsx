import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Lineargradient from 'react-native-linear-gradient';

import { GradientContext } from '../context/gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: Props) => {
  const { colors } = useContext(GradientContext);

  return (
    <View style={styles.mainContainer}>
      <Lineargradient
        colors={[`${colors.primary}`, `${colors.secondary}`, 'white']}
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
