import LogRocket from '@logrocket/react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './src/MainPage';
import TipCalculator from './src/TipCalculator';
import VerseOfTheDay from './src/VerseOfTheDay';
import MadLibs from './src/MadLibs';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    LogRocket.init('d1mula/multi-function-app');
  }, []);
  LogRocket.identify('JM44038', {
    name: 'James Morrison',
    email: 'jamesmorrison@example.com',
    subscriptionType: 'pro',
    age: 35,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Multi Function App"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Tip Calculator" component={TipCalculator} />
        <Stack.Screen name="Verse of the Day" component={VerseOfTheDay} />
        <Stack.Screen name="Mad Libs" component={MadLibs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
