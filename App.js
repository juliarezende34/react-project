import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import Page from './views/page';
import {css} from './assets/css/Css';

export default function App() {
  const props={
    empresa: 'Mappid',
    name: 'Julia'
  }

  return (
    <View style = {css.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Page {...props}/>
    </View>
  );
}


