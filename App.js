import React, {useState,useEffect} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Cadastro, Busca, PerfilPessoal, PerfilEmpresa} from './views';

EStyleSheet.build();

export default function App() {
 
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options = {{
            title: "Home",
            headerStyle:{backgroundColor:'#5FB0B6'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Login" options={{
          title:' ',
          headerTintColor:'white',
          headerStyle:{backgroundColor: "#5FB0B6"}
        }} component={Login} />
        <Stack.Screen name="Cadastro" options={{
          title: ' ',
          headerTintColor:'white',
          headerStyle:{backgroundColor: "#5fb0b6"}
        }} component={Cadastro} />
        <Stack.Screen name="Busca" options={{
          title: 'Busca',
          headerTintColor:'white',
          headerStyle:{backgroundColor: "#5fb0b6"}
        }} component={Busca} />
        <Stack.Screen name="PerfilPessoal" options={{
          title: 'Perfil Pessoal',
          headerTintColor:'white',
          headerStyle:{backgroundColor: "#5fb0b6"}
        }} component={PerfilPessoal} />
        <Stack.Screen name="PerfilEmpresa" options={{
          title: 'Perfil Empresa',
          headerTintColor:'white',
          headerStyle:{backgroundColor: "#5fb0b6"}
        }} component={PerfilEmpresa} />
        {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


