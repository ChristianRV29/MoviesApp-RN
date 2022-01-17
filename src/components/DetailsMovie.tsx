import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsMovie = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Hello world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 2,
  },
  text: {
    color: 'black',
  },
});

export default DetailsMovie;
