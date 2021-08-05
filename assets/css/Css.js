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

    textPage:{
        backgroundColor:'#add8e6',
        padding: 20
    },
  
    homeButton:{
      marginRight:40
    },

    darkbg:{
      backgroundColor:"#333"
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
        marginBottom: 15
    },

    loginButton:{
        padding: 12,
        backgroundColor: "#A6E7E3",
        alignSelf:"center",
        borderRadius:5
    },

    loginButtonText:{
      fontWeight:'bold',
      fontSize:22,
      color:'#333'
    },

    loginIcon:{
      marginBottom:50,

    }

  });

  export {css};