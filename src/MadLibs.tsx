import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const MadLibs = () => {
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');
  const [adjective, setAdjective] = useState('');
  const [madLib, setMadLib] = useState<string | null>(null);

  const generateMadLib = () => {
    if (noun && verb && adjective) {
      setMadLib(`The ${adjective} ${noun} ${verb} over the lazy dog.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mad Libs</Text>

      <TextInput
        style={styles.input}
        value={noun}
        onChangeText={setNoun}
        placeholder=" Enter a noun"
      />

      <TextInput
        style={styles.input}
        value={verb}
        onChangeText={setVerb}
        placeholder=" Enter a verb"
      />

      <TextInput
        style={styles.input}
        value={adjective}
        onChangeText={setAdjective}
        placeholder=" Enter an adjective"
      />

      <TouchableOpacity style={styles.button} onPress={generateMadLib}>
        <Text style={styles.buttonText}>Generate Mad Lib</Text>
      </TouchableOpacity>

      {madLib && <Text style={styles.madLib}>{madLib}</Text>}
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
  input: {
    height: 40,
    borderColor: '#2793d5',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
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
  madLib: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MadLibs;
