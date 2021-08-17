import React, {useState, useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking, Image} from 'react-native';
import {css} from '../assets/css/Css';

export default function Login(){
    const [display, setDisplay]=useState('none');
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            
            <View style={css.header}>
                <Text style={css.headerText}>Login</Text>
            </View>
            

            <View>
                <Text style={css.loginMsg(display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.form}>
                <Text style={css.formText}>Email:</Text>
                <TextInput style={css.input} placeholder='example@gmail.com' />
                <Text style={css.formText}>Senha:</Text>
                <TextInput style={css.input} secureTextEntry={true}/>
                <TouchableOpacity style={css.button}  onPress={()=>setDisplay('flex')}>
                    <Text style={css.buttonText}>Login</Text>
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

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text>Não tem uma conta?</Text>
                <Text style={{color: '#318e89', alignSelf:'center', textDecorationLine:'underline'}} onPress={()=> Linking.openURL('http://google.com')}>Cadastre-se</Text>
                
            </View>

        </KeyboardAvoidingView>
        
    );
}