import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import Pet from './src/components/PetDetail'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pet name="Muffin" imageSrc={require('./assets/cat1.jpg')} />
        <Pet name="Sir Charles Flooferson III" imageSrc={require('./assets/cat2.jpg')} />
        <Pet name="Cookie" imageSrc={require('./assets/cat3.jpg')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});