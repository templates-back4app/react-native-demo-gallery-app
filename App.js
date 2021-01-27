/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// In a React Native application
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-community/async-storage';
import keys from './constants/Keys';

import UploadImage from './UploadImage';
import Gallery from './Gallery';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UploadImage />
      <Gallery />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
