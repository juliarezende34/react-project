import React from 'react';
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking, Image} from 'react-native';
import {css} from '../assets/css/Css';

export default function Cadastro(){
    
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            
            <View style={css.cadastroHeader}>
                <Text style={css.cadastroHeaderText}>Cadastro</Text>
            </View>
            
            <View style={css.cadastroForm}>
                <TextInput style={css.cadastroInput} placeholder='Nome:' />
                <TextInput style={css.cadastroInput} placeholder='Email'/>
                <TextInput style={css.cadastroInput} placeholder='Username'/>
                <TextInput style={css.cadastroInput} placeholder='Telefone'/>
                <TextInput style={css.cadastroInput} placeholder='Senha:'secureTextEntry={true}/>
                <TextInput style={css.cadastroInput} placeholder='Confirme a senha:'secureTextEntry={true}/>
                <TouchableOpacity style={css.cadastroButton}>
                    <Text style={css.cadastroButtonText}>Cadastrar</Text>
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
                <Text>Já tem uma conta?</Text>
                <Text style={{color: 'blue', alignSelf:'center', textDecorationLine:'underline'}}>Logar</Text>
                
            </View>

        </KeyboardAvoidingView>
        
    );
}

