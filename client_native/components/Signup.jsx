import React, { useState } from 'react';
import { Route } from 'react-router-native';
import { View, Text, TextInput, TouchableOpacity, Dimensions,StatusBar, SafeAreaView } from 'react-native';
import styles from "./loginstyles"
// import { StatusBar } from 'expo-status-bar';
const Signup = ({navigation}) => {
  const [credential, setCredential] = useState({ email: '', password: '' });

  const onChange = (name, value) => {
    setCredential((prev) => ({ ...prev, [name]: value }));
  };
  const onPress =()=>{
    console.log("signcontainer")
    navigation.navigate("login")
  }
  const handleClick = () => {
    // Your login logic here
  };

  return (

    <SafeAreaView style={styles.signcontainer}>
       <StatusBar
        barStyle={Route.name === 'Signup' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.form}>
        <Text style={styles.header}>Signup</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChange('password', text)}
          value={credential.password}
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
        <TouchableOpacity style={styles.button} onPress={handleClick}>
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
