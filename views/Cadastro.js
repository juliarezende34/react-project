import React from 'react';
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking, Image} from 'react-native';
import {css} from '../assets/css/Css';

export default function Cadastro(){
    
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.containerLoginCadastro, css.darkbg]}>
            
            <View style={css.headerLoginCadastro}>
                <Text style={css.headerTextLoginCadastro}>Cadastro</Text>
            </View>
            
            <View style={css.formLoginCadastro}>
                <Text style={css.formTextLoginCadastro}>Nome:</Text>
                <TextInput style={css.inputLoginCadastro} placeholder='@nome'/>
                <Text style={css.formTextLoginCadastro}>Email:</Text>
                <TextInput style={css.inputLoginCadastro} placeholder='example@gmail.com'/>
                <Text style={css.formTextLoginCadastro}>Username:</Text>
                <TextInput style={css.inputLoginCadastro} placeholder='@user'/>
                <Text style={css.formTextLoginCadastro}>Telefone:</Text>
                <TextInput style={css.inputLoginCadastro} placeholder='@user'/>
                <Text style={css.formTextLoginCadastro}>Senha:</Text>
                <TextInput style={css.inputLoginCadastro} secureTextEntry={true}/>
                <Text style={css.formTextLoginCadastro}>Confirme sua senha:</Text>
                <TextInput style={css.inputLoginCadastro} secureTextEntry={true}/>
                <TouchableOpacity style={css.buttonLoginCadastro}>
                    <Text style={css.buttonTextLoginCadastro}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text>Já tem uma conta?</Text>
                <Text style={{color: '#318e89', alignSelf:'center', textDecorationLine:'underline'}}>Logar</Text>
                
            </View>

        </KeyboardAvoidingView>
        
    );
}

