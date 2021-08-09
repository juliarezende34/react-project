import React, {useState, useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking, Image} from 'react-native';
import {css} from '../assets/css/Css';

export default function Login(){
    const [display, setDisplay]=useState('none');
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            
            <View style={css.loginHeader}>
                <Text style={css.loginHeaderText}>Login</Text>
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

            <View style={css.container3}>
                <TouchableOpacity>
                    <Image source={require('../assets/google.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/fb.png')}/>
                </TouchableOpacity>
            </View>

            <View>
                <Text>Não tem uma conta?</Text>
                <Text style={{color: 'blue', alignSelf:'center', textDecorationLine:'underline'}} onPress={()=> Linking.openURL('http://google.com')}>Cadastre-se</Text>
                
            </View>

        </KeyboardAvoidingView>
        
    );
}