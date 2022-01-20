import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Cast } from '../interfaces/movieDetails';

interface Props {
  actorInfo: Cast;
}

const ActorCard = ({ actorInfo }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actorInfo.profile_path}`;

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri }} style={styles.actorImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.textName}>{actorInfo.name}</Text>
        <Text style={styles.textCharacter}>{actorInfo.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  textCharacter: {
    fontSize: 16,
    opacity: 0.7,
    color: 'black',
  },
});

export default ActorCard;
