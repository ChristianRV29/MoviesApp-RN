import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import { RootStackParams } from './../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, any> {}

const DetailScreen = ({ route }: Props) => {
  const movie = route.params;

  useEffect(() => {
    console.log('Detail screen render');
  }, []);

  return (
    <View>
      <Text style={{ color: 'black' }}>Detail screen</Text>
      <Text style={{ color: 'black' }}>{movie!.title}</Text>
    </View>
  );
};

export default DetailScreen;
