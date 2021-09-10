import React, {useState, useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking, Image} from 'react-native';
import {css} from '../assets/css/Css';

export default function Login(){
    const [display, setDisplay]=useState('none');
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.containerLoginCadastro, css.darkbg]}>
            
            <View style={css.headerLoginCadastro}>
                <Text style={css.headerTextLoginCadastro}>Login</Text>
            </View>
            

            <View>
                <Text style={css.loginMsg(display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={css.formLoginCadastro}>
                <Text style={css.formTextLoginCadastro}>Email:</Text>
                <TextInput style={css.inputLoginCadastro} placeholder='example@gmail.com' />
                <Text style={css.formTextLoginCadastro}>Senha:</Text>
                <TextInput style={css.inputLoginCadastro} secureTextEntry={true}/>
                <TouchableOpacity style={css.buttonLoginCadastro}  onPress={()=>setDisplay('flex')}>
                    <Text style={css.buttonTextLoginCadastro}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text>Não tem uma conta?</Text>
                <Text style={{color: '#318e89', alignSelf:'center', textDecorationLine:'underline'}} onPress={()=> Linking.openURL('http://google.com')}>Cadastre-se</Text>
                
            </View>

        </KeyboardAvoidingView>
        
    );
}