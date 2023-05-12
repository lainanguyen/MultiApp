import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  'Multi Function App': undefined;
  'Tip Calculator': undefined;
  'Verse of the Day': undefined;
  'Mad Libs': undefined;
};

type MainPageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Multi Function App'
>;
type MainPageScreenRouteProp = RouteProp<
  RootStackParamList,
  'Multi Function App'
>;

type Props = {
  navigation: MainPageScreenNavigationProp;
  route: MainPageScreenRouteProp;
};

const MainPage = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multi Function App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tip Calculator')}>
        <Text style={styles.buttonText}>Tip Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Verse of the Day')}>
        <Text style={styles.buttonText}>Verse of the Day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Mad Libs')}>
        <Text style={styles.buttonText}>Mad Libs</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2793d5',
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

export default MainPage;
