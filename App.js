import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import {Text, View, Button, Alert } from 'react-native';
import Page from './views/page';
import {css} from './assets/css/Css';

export default function App() {
  const[product, setProduct] = useState('bola');
  const[quantity, setQuantity] = useState(0);

  useEffect(() =>{
    if(quantity > 0){
      Alert.alert('Novo produto adicionado');
    }
  }, [quantity]);

  const props={
    empresa: 'Mappid',
    name: 'Julia',
    produto: product,
    quantidade: quantity
  }

  return (
    <View style = {css.container}>
      <Text>{product}</Text>
      <Page {...props}/>
    <Button title= 'Adicionar produtos' onPress={()=>setQuantity(quantity+1)}/>
    </View>
  );
}


