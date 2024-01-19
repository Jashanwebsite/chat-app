import React, { useRef, useState } from 'react';
import {Api_key} from "@env"
import Constants from 'expo-constants';
import { View, Text, TextInput,Alert, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import styles from "./loginstyles"
// import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
// import MMKV from 'react-native-mmkv-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MMKVStorage from 'react-native-mmkv-storage';
// import { useNavigation } from 'react-router-native';
const LoginForm = ({navigation}) => {
  const [credential, setCredential] = useState({ email: '', password: '' });
  const onChange = (name, value) => {
    setCredential((prev) => ({ ...prev, [name]: value }));
    console.log(credential.email)
    console.log(Api_key)
  };
  const apiKey = process.env.Api_key|| Constants.secrets.apiKey  
  const host =  apiKey
  const handelclick = async (e) => {
    e.preventDefault();
    console.log(credential)
    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"email": credential.email, "password": credential.password }),
    });
    
    const json = await response.json();
    if  (await json.token) {
      await AsyncStorage.setItem("chat",json.token)
      await AsyncStorage.setItem("user_id",json.user_id)
      console.log(AsyncStorage.getItem("chat"))
      navigation.navigate("Home")
      
     
    } else {

      // Alert.alert()
      alert("please enter valid details")

  };
  }
  const alertref = useRef(null)
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
