import React, {useState,useEffect} from 'react';
import {Text, View, Button} from 'react-native';

export default function Home(props){
    return(
        <View>
            <Text>Esse é o componente Home</Text>
            <Button 
                title='Ir para Login' 
                onPress={()=>props.navigation.navigate('Login', {
                    itemId: 30
                })} 
            />
        </View>
    );
}