import React, {useState,useEffect} from 'react';
import {Text, View, Button} from 'react-native';

export default function Rastreio(props){
    return(
        <View>
            <Text>Esse é o componente Rastreio</Text>
            <Button 
                title='Ir para Login' 
                onPress={()=>props.navigation.navigate('Login', {
                    itemId: 30
                })} 
            />
        </View>
    );
}