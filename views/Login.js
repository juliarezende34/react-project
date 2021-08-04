import React, {useState,useEffect} from 'react';
import {Text, View} from 'react-native';

export default function Login(props){
    return(
        <View>
            <Text>Esse é o componente Login - {props.route.params.itemId}</Text>
        </View>
    );
}