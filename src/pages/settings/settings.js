import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


const Settings = ({ navigation }) => (

            <View>
                <Text>Settings</Text>

                <View>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Login') }}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
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
    

});


export default Settings;