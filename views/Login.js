import React, {useState, useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';

export default function Login(){
    const [display, setDisplay]=useState('none');
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.loginIcon}>
                <Image source={require('../assets/img/icon.png')}/>
            </View>

            <View>
                <Text style={css.loginMsg(display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.loginForm}>
                <TextInput style={css.loginInput} placeholder='Usuário:' />
                <TextInput style={css.loginInput} placeholder='Senha:'secureTextEntry={true}/>
                <TouchableOpacity style={css.loginButton}  onPress={()=>setDisplay('flex')}>
                    <Text style={css.loginButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    );
}