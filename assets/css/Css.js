import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import responsividade from "../../utils/responsividade";


const css = EStyleSheet.create({
    //Container principal - Login e Cadastro - ok
    containerLoginCadastro: {
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

    //Container principal - Busca - ok
    containerBusca: {
      backgroundColor: '#F2F2F2',
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
      padding: 20
    },

    //Cor de fundo das páginas - ok
    darkbg:{
      backgroundColor:"white"
    },
 
    //USADO NA HOME PAGE - NÃO NECESSÁRIO NO PROJETO FINAL
    loginIcon:{
      marginBottom:50,

    },

    //Mensagem de erro para o Login
    /*loginMsg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 22,
      color:"red",
      marginBottom: '10%',
      display: text
    }),*/

    //Formatação do container do form - Login e Cadastro
    formLoginCadastro:{
      width: "80%"
      //marginTop: '-5%'
    },

    //Formatação do input do form - Login e Cadastro - ok 
    inputLoginCadastro:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
        marginBottom: '7%',
        borderWidth: 1,
        borderColor: '#847575',
        borderRadius:20,
        marginTop: '3%'
    },

    //Formatação do espaço do título da página - Login e Cadastro - ok
    headerLoginCadastro:{
      alignSelf: 'baseline',
      marginLeft: '9%',
      marginBottom: '10%',
    },

    //Formatação do texto do título da página - Login e Cadastro - ok 
    headerTextCadastro:{
      color: '#318e89',
      fontSize: 25,
      //marginTop: '30%'
    },

    headerTextLogin:{
      color: '#318e89',
      fontSize: 25,
    },
    
    //Formatação do botão - Login e Cadastro -ok
    buttonCadastro:{
      backgroundColor: "#A6E6E3",
      alignSelf:"center",
      borderRadius:5,
      width: '30%',
      height: '6%',
      paddingTop: '3%'
      //marginBottom: '2%'
    },

    buttonLogin:{
      backgroundColor: "#A6E6E3",
      alignSelf:"center",
      borderRadius:5,
      width: '30%',
      height: '13%',
      paddingTop: '3%'
      //marginBottom: '-14%'
    },

    //Formatação do texto do botão - Login e Cadastro - ok
    buttonTextLoginCadastro:{
      fontSize: 15,
      color: '#4a4a4a',
      alignSelf:'center'
    },

    //Formatação do texto usado antes do input no form - Login e Cadastro - ok
    formTextLoginCadastro:{
      fontSize:17,
      fontWeight:'bold',
      color: "#847575"
    },

    //Formatação do container do form - Busca - ok 
    buscaForm:{
      width: "90%",
      backgroundColor: '#F2F2F2'
      //width: '100%'
    },

    //Formatação do input do form - Busca - ok
    buscaInput:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: '3%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: '5%',
        marginLeft:'3%' 
        //marginLeft: '5%'
        //marginRight: '5%'
        //width: '90%'
    },

    '@media (min-height: 2300)': {
      formLoginCadastro:{
        marginTop: '-5%',
      },
      
      headerTextCadastro:{
        marginTop: '30%',
      },
      
      headerTextLogin:{},
      
      buttonCadastro:{
        marginBottom: '2%',
      },
      
      buttonLogin:{
        marginBottom: '-14%',
      },
      
      buscaForm:{
        width: '100%',
      },
      
      buscaInput:{
        width: '90%',
        marginLeft:'5%',
        marginRight:'5%',
      },
    }
  
  });

  export {css};