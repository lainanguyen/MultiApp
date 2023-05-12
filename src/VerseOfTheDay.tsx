import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const images = [
  require('../assets/Image1.jpeg'),
  require('../assets/Image2.jpeg'),
  require('../assets/Image3.jpeg'),
  require('../assets/Image4.jpeg'),
  require('../assets/Image5.jpeg'),
];

const verses = [
  'John 3:16: For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
  'Romans 8:28: And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
  'Philippians 4:13: I can do all things through him who strengthens me.',
  // Add more verses...
];

const VerseOfTheDay: React.FC = () => {
  const [verse, setVerse] = useState('');
  const [image, setImage] = useState<any>(images[0]);

  const generateVerseOfTheDay = () => {
    const randomVerseIndex = Math.floor(Math.random() * verses.length);
    const randomImageIndex = Math.floor(Math.random() * images.length);

    setVerse(verses[randomVerseIndex]);
    setImage(images[randomImageIndex]);
  };

  useEffect(() => {
    generateVerseOfTheDay();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verse of the Day</Text>

      {image && (
        <Image source={image} style={styles.image} resizeMode="contain" />
      )}

      <Text style={styles.verse}>{verse}</Text>

      <TouchableOpacity style={styles.button} onPress={generateVerseOfTheDay}>
        <Text style={styles.buttonText}>Generate New Verse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#DDDDDD',
  },
  title: {
    color: '#2793d5',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  verse: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2793d5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VerseOfTheDay;
