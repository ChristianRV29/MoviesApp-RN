import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const DetailScreen = () => {
  useEffect(() => {
    console.log('Detail screen render');
  }, []);

  return (
    <View>
      <Text>Detail screen</Text>
    </View>
  );
};

export default DetailScreen;
