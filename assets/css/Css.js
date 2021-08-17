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

    form:{
      width: "80%"
    },

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

    loginIcon:{
      marginBottom:50,

    },

    header:{
      alignSelf: 'baseline',
      marginLeft: 20,
      marginBottom:50,
    },

    headerText:{
      color: '#318e89',
      fontSize: 25
    },
    
    button:{
        backgroundColor: "#A6E6E3",
        alignSelf:"center",
        borderRadius:5,
        width: 96,
        height: 34,
        paddingTop: 8
    },

    buttonText:{
      fontSize: 15,
      color: '#4a4a4a',
      alignSelf:'center'
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
    },

    formText:{
      fontSize:17,
      fontWeight:'bold',
      color: "#847575"
    }
    
  });

  export {css};