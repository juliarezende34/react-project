import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    container2: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    container3:{
      flexDirection:'row',
      padding: 5,
    },

    container4: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'row',
    },

    container5: {
      flexDirection:'row',
    },

    textPage:{
        backgroundColor:'#add8e6',
        padding: 20
    },
  
    homeButton:{
      marginRight:40
    },

    darkbg:{
      backgroundColor:"white"
    },

    loginMsg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 22,
      color:"red",
      marginBottom: 15,
      display: text
    }),

    loginform:{
      width: "80%"
    },

    loginInput:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        paddingRight: '60%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:20
    },

    loginButton:{
        padding: 12,
        backgroundColor: "#5FB0B6",
        alignSelf:"center",
        borderRadius:10,
        marginBottom:20
    },

    loginButtonText:{
      
      fontSize:22,
      color:'#333'
    },

    loginIcon:{
      marginBottom:50,

    },

    loginHeader:{
      alignSelf: 'baseline',
      marginLeft: 20,
      marginBottom:50,
    },

    loginHeaderText:{
      color: '#5FB0B6',
      fontSize:30
    },

    cadastroHeader:{
      alignSelf: 'baseline',
      marginLeft: 20,
      marginBottom:50,
    },

    cadastroHeaderText:{
      color: '#5FB0B6',
      fontSize:30
    },

    cadastroform:{
      width: "80%"
    },

    cadastroInput:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        paddingRight: '40%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:20
    },
    
    cadastroButton:{
        padding: 12,
        backgroundColor: "#5FB0B6",
        alignSelf:"center",
        borderRadius:10,
        marginBottom:20
    },

    buscaForm:{
      width: "90%"
    },

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

    buscaIcon:{
      width: 20,
      height: 20
    }
    
  });

  export {css};