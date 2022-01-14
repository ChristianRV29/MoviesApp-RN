import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './../screens/HomeScreen';
import DetailScreen from './../screens/DetailScreen';
import { Movie } from '../interfaces/movie';

export type RootStackParams = {
  Home: undefined;
  Details: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const { Navigator, Screen } = Stack;

export const Navigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Screen name={'Home'} component={HomeScreen} />
      <Screen name={'Details'} component={DetailScreen} />
    </Navigator>
  );
};
