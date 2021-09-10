import React from 'react';
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking, Image, Icon} from 'react-native';
import {css} from '../assets/css/Css';

export default function Busca(){
    
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.containerBusca, css.darkbg]}>
            
            <View style={css.buscaForm}>
                <TextInput style={css.buscaInput} placeholder='' />

            </View>
           
        </KeyboardAvoidingView>
        
    );
}

