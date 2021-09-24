import React, {useState,useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}){
    return(
        <View style={css.container2}>
            <TouchableOpacity
                style={css.homeButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Image source={require('../assets/img/loginIcon.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Image source={require('../assets/cadastroIcon.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                style={css.homeButton}
                onPress={() => navigation.navigate('Busca')}
            >
                <Image source={require('../assets/buscaIcon.png')}/>
            </TouchableOpacity>

            
        </View>
    );
}