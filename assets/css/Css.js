import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    //Container principal - Login e Cadastro 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    //USADO NA HOME PAGE - NÃO NECESSÁRIO NO PROJETO FINAL
    container2: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    //Container das imagens das opções de autenticação - Login e Cadastro
    container3:{
      flexDirection:'row',
      padding: 5,
    },

    //Container principal - Busca
    container4: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'row',
    },

    //USADO NA HOME PAGE - NÃO NECESSÁRIO NO PROJETO FINAL
    container5: {
      flexDirection:'row',
    },

    //USADO NA HOME PAGE - NÃO NECESSÁRIO NO PROJETO FINAL
    textPage:{
        backgroundColor:'#add8e6',
        padding: 20
    },

    //USADO NA HOME PAGE - NÃO NECESSÁRIO NO PROJETO FINAL
    homeButton:{
      margin: 30,
    },

    //Cor de fundo das páginas
    darkbg:{
      backgroundColor:"white"
    },
 
    //USADO NA HOME PAGE - NÃO NECESSÁRIO NO PROJETO FINAL
    loginIcon:{
      marginBottom:50,

    },

    //Mensagem de erro para o Login
    loginMsg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 22,
      color:"red",
      marginBottom: 15,
      display: text
    }),

    //Formatação do container do form - Login e Cadastro
    form:{
      width: "80%"
    },

    //Formatação do input do form - Login e Cadastro
    input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        paddingRight: '60%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#847575',
        borderRadius:20,
        marginTop:10
    },

    //Formatação do espaço do título da página - Login e Cadastro
    header:{
      alignSelf: 'baseline',
      marginLeft: 20,
      marginBottom:50,
    },

    //Formatação do texto do título da página - Login e Cadastro
    headerText:{
      color: '#318e89',
      fontSize: 25
    },
    
    //Formatação do botão - Login e Cadastro
    button:{
        backgroundColor: "#A6E6E3",
        alignSelf:"center",
        borderRadius:5,
        width: 96,
        height: 34,
        paddingTop: 8
    },

    //Formatação do texto do botão - Login e Cadastro
    buttonText:{
      fontSize: 15,
      color: '#4a4a4a',
      alignSelf:'center'
    },

    //Formatação do texto usado antes do input no form - Login e Cadastro
    formText:{
      fontSize:17,
      fontWeight:'bold',
      color: "#847575"
    },

    //Formatação do container do form - Busca
    buscaForm:{
      width: "90%"
    },

    //Formatação do input do form - Busca
    buscaInput:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        paddingRight: '60%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:10,
        marginTop: 25,
        marginLeft:10
        
    },

    //Imagem da lupa ao lado da caixa de digitação - Busca
    buscaIcon:{
      width: 20,
      height: 20
    },
  
  
  });

  export {css};