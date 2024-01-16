import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput,Keyboard, FlatList, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InsetShadow from "react-native-inset-shadow";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./chatstyle";
import Header from "./Header";

const ChatMessage = () => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        const keyboardHeight = event.endCoordinates.height;
        console.log('Keyboard height:', keyboardHeight);
      }
    );

    // Clean up the listener when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);
  const [newmessage, setnewmessage] = useState({
    id: "",
    message: "",
    sender: "",
  });
  const [data, setdata] = useState([
    { id: "1", message: "Hello!", sender: "user" },
    { id: "2", message: "Hi there!", sender: "other" },
    { id: "3", message: "Hi there!", sender: "other" },
    // { id: '1', message: 'Hello!', sender: 'user' },
    // { id: '2', message: 'Hi there!', sender: 'other' },
    // { id: '3', message: 'Hi there!', sender: 'other' },
    // { id: '1', message: 'Hello!', sender: 'user' },
    // { id: '2', message: 'Hi there!', sender: 'other' },
    // { id: '3', message: 'Hi there!', sender: 'other' },
    // { id: '1', message: 'Hello!', sender: 'user' },
    // { id: '2', message: 'Hi there!', sender: 'other' },
    // { id: '3', message: 'hi ', sender: 'other' },
    // { id: '2', message: 'Hi there!', sender: 'other' },
    // { id: '3', message: 'Hi there!', sender: 'other' },
    // { id: '1', message: 'Hello!', sender: 'user' },
    // { id: '2', message: 'Hi there!', sender: 'other' },
    // { id: '3', message: 'Hi there!', sender: 'other' },
    // { id: '1', message: 'Hello!', sender: 'user' },
    // { id: '2', message: 'Hi there!', sender: 'other' },
    // { id: '3', message: 'last', sender: 'other' },
  ]);
  const ref = useRef();
  const onclick = () => {
    setdata([...data, newmessage]);
    console.log(data);
  };
  useEffect(() => {
    ref.current.scrollToEnd({ animated: false });
    console.log(newmessage);
  }, [newmessage]);
  const renderItem = ({ item }) => (
    <View
      style={item.sender === "user" ? styles.userMessage : styles.otherMessage}
    >
      <Text style={styles.messageText}>{item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.content}
        extraScrollHeight={-220}
        enableOnAndroid
      >
        <FlatList
          ref={ref}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </KeyboardAwareScrollView>
      <View style={styles.footer}>
        <InsetShadow
          containerStyle={styles.footercontent}
          top={true}
          shadowOpacity={1}
          elevation={10}
          shadowRadius={100}
          bottom={false}
          shadowColor={"white"}
        >
          <TextInput
            onChangeText={(text) => {
              setnewmessage({ id: "10", message: text, sender: "user" });
            }} 
            spellCheck={true}
            placeholderTextColor={"white"}
            style={styles.TextInput}
            placeholder="Enter message"
          />
          <LinearGradient
            onTouchEnd={() => (newmessage.message === "" ? null : onclick())}
            colors={["#84c6f8", "#6498fc", "#4d75fe"]}
            start={{ x: 0.1, y: 0.5 }}
            style={styles.button}
          >
            <Text>Send</Text>
          </LinearGradient>
        </InsetShadow>
      </View>
    </SafeAreaView>
  );
};

export default ChatMessage;
