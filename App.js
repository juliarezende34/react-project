import React, {useState,useEffect} from 'react';
import {Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Rastreio} from './views';

export default function App() {
 
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options = {{
            title: "Bem Vindo",
            headerStyle:{backgroundColor:'lightblue'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Login" options={{
          title:' ',
          headerStyle:{backgroundColor: "#5FB0B6"}
        }} component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


