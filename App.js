/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
*/



import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native-elements';


const App: () => React$Node = () => {
  return (
    <>
      <Header
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      />
    </>
  );
};

export default App;
