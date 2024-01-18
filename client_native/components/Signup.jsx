import Constants from 'expo-constants';
import React, { useState } from 'react';
import { Route } from 'react-router-native';
import { View, Text, TextInput, TouchableOpacity, Dimensions,StatusBar, SafeAreaView } from 'react-native';
import styles from "./loginstyles"
import {Api_key} from "@env"
// import { StatusBar } from 'expo-status-bar';
const Signup = ({navigation}) => {
  const [credential, setCredential] = useState({ email: '', password: '' ,name:""});

  const onChange = (name, value) => {
    setCredential((prev) => ({ ...prev, [name]: value }));
  };
  const onPress =()=>{
    console.log("signcontainer")
    navigation.navigate("login")
  }

// Access the API key
const apiKey = Constants.manifest.secrets.apiKey;

  const host = apiKey 
  const handelclick = async(e) => {
    // setloder(true)
      e.preventDefault();
      console.log("button pressed")
      const response = await fetch(`${host}/auth/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"email":credential.email,"name":credential.name,"password":credential.password}),
        });
        const json = await response.json()
        if (json.token){
          console.log(json.token)
          navigation.navigate("Home")
        }else{
          console.log("error in signup in signup.jsx")
        }// setloder(false)
    }
  return (

    <SafeAreaView style={styles.signcontainer}>
       <StatusBar
        barStyle={Route.name === 'Signup' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.form}>
        <Text style={styles.header}>Signup</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChange('name', text)}
          value={credential.name}
        //   secureTextEntry={true}
          placeholder="Enter your Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChange('email', text)}
          value={credential.email}
          placeholder="Enter your email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChange('password', text)}
          value={credential.password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        <TouchableOpacity style={styles.button} onPress ={handelclick} >
          <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500', letterSpacing: 1 }}>Login</Text>
        </TouchableOpacity> 
        <View style={styles.signup}>
        <Text onPress={onPress}
         style={styles.signupText}>
         Have an account? Login
        </Text>
      </View>
         </View>
    </SafeAreaView>
     
     
  );
};

export default Signup;
