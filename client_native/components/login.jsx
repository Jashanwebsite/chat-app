import React, { useState } from 'react';
import Config from "react-native-config";
import {Api_key} from "@env"
import Constants from 'expo-constants';

const apiKey = Constants.manifest.secrets.apiKey;

import { View, Text, TextInput, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import styles from "./loginstyles"
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from 'react-router-native';
const LoginForm = ({navigation}) => {
  const [credential, setCredential] = useState({ email: '', password: '' });

  const onChange = (name, value) => {
    setCredential((prev) => ({ ...prev, [name]: value }));
    console.log(credential.email)
    console.log(Api_key)
  };
   const host = apiKey
  const handelclick = async (e) => {
    // setloder(true)
    e.preventDefault();
    console.log(credential)
    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"email": credential.email, "password": credential.password }),
    });
    const json = await response.json()

    if (json.token) {
      AsyncStorage.setItem("chat-token",json.token)
      navigation.navigate("Home")
      console.log(json.token)
     
    } else {
      // setloder(false)
      alert("please enter valid details")

  };
  }
  const onpress = () => {
    navigation.navigate("Signup")
  };
  return (
    <SafeAreaView style={styles.signcontainer}>
      <View style={styles.form}>
        <Text style={styles.header}>Login</Text>
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
        <TouchableOpacity style={styles.button} onPress={handelclick}  >
          <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500', letterSpacing: 1 }}>Login</Text>
        </TouchableOpacity> 
        <View style={styles.signup} >
        <Text onPress={onpress} style={styles.signupText}>
          Don't have an account? Signup
        </Text>
      </View>
         </View>
    </SafeAreaView>
     
     
  );
};

export default LoginForm;
