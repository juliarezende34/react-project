import React from 'react';
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking, Image} from 'react-native';
import {css} from '../assets/css/Css';

export default function Cadastro(){
    
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            
            <View style={css.header}>
                <Text style={css.headerText}>Cadastro</Text>
            </View>
            
            <View style={css.form}>
                <Text style={css.formText}>Nome:</Text>
                <TextInput style={css.input} placeholder='@nome'/>
                <Text style={css.formText}>Email:</Text>
                <TextInput style={css.input} placeholder='example@gmail.com'/>
                <Text style={css.formText}>Username:</Text>
                <TextInput style={css.input} placeholder='@user'/>
                <Text style={css.formText}>Telefone:</Text>
                <TextInput style={css.input} placeholder='@user'/>
                <Text style={css.formText}>Senha:</Text>
                <TextInput style={css.input} secureTextEntry={true}/>
                <Text style={css.formText}>Confirme sua senha:</Text>
                <TextInput style={css.input} secureTextEntry={true}/>
                <TouchableOpacity style={css.button}>
                    <Text style={css.buttonText}>Cadastrar</Text>
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
                <Text>Já tem uma conta?</Text>
                <Text style={{color: '#318e89', alignSelf:'center', textDecorationLine:'underline'}}>Logar</Text>
                
            </View>

        </KeyboardAvoidingView>
        
    );
}

