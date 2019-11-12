import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput
} from 'react-native';


const Login = ({ navigation }) => (
    
    <View style={styles.container}>
        <StatusBar
        barStyle="light-content"
        />
        <View style={styles.headerContainer}>
            <Text style={styles.title}>MyBike</Text>
        </View>
        <View style={styles.myForm}>
            <View style={{alignItems:'center', marginTop:-60}}>
                <Image
                    style={styles.nutriImage}
                    source={require('../../assets/icons/mybikeicon.png')}
                />
            </View>
           <TextInput
                placeholder="Username"
                style={styles.textInput}
            />
            <TextInput
                placeholder="Password"
                style={styles.textInput}
            />
            

            <TouchableOpacity
                    onPress={() => { navigation.navigate('Tabs') }}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
            </TouchableOpacity>

            <Text style={{textAlign:'right', paddingRight:20}}>
                Esqueceu a senha?
            </Text>


            <Text style={styles.createCount}>
                Não possui conta? Cadastre-se <Text style={{textDecorationLine:'underline'}}>Aqui</Text>
            </Text>
        </View>
    </View>
        
);


const styles =StyleSheet.create({

   container:{
    alignItems: "center",
    flex: 1,
    padding:20,
    backgroundColor: "#35495e",
   },


   logo:{
        height: Dimensions.get('window').height * 0.11,
        marginVertical: Dimensions.get('window').height * 0.11,
        width: Dimensions.get('window').height * 0.11 * (1950 / 662),
   },

   nutriImage:{
    marginTop: 10,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:50,
},


   myForm:{
    marginTop:80,
    width: Dimensions.get('window').width - 50,
    backgroundColor:"#e9e9e9",
    borderColor: "#0000",
    borderRadius:10
   },
   textInput:{
     height: 40,
     borderColor: 'gray',
     borderWidth: 1,
     margin:20 
   },

   title:{
    color:"#ffff",
    fontSize: 40
   },

   buttonContainer:{
    backgroundColor:"#347474",
    paddingVertical: 15,
    margin:20,
    borderRadius: 10,
  
    },
    buttonText:{
        textAlign: "center",
        color:"#FFFF",
        fontWeight: "700",
    },

    createCount:{
        textAlign:'center',
        marginTop:80,
        marginBottom:10
    }
});

export default Login;

