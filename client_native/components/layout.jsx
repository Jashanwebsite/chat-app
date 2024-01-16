import React, { Component, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  Pressable,
  StatusBar,
  SafeAreaView,
  
  TextInput,
  FlatList,
  Image,
} from "react-native";
import style from "./style";

const LayoutSlider = ({navigation}) => {
  const [islisthover, setislisthover] = useState(null);
  const on_list_hover_start = (itemId) => {
    setislisthover(itemId);
  };
  const onpress =()=>{navigation.navigate("Chat")} 
  const onlogin =()=>{navigation.navigate("login")} 
  const on_list_hover_end = () => {
    setislisthover(null);
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15,16,17,108,19,20,21];
  const newdata = [];

  return (
    <SafeAreaView>
      <View style={{ ...style.layout, paddingTop: StatusBar.currentHeight }}>
        <View style={style.slider}>
          <View style={style.slider_header}>
            <View style={style.slider_button_header}>
              <View style={style.slider_button_header.image}>
              <Image style={style.slider_button_header.image}  source={require("../components/chat-app-design.jpg")}/>
              </View>
              <View style={style.slider_button_header.text_view}>
                <Text style={style.slider_button_header.text_view.text}>jashan._17</Text>
              </View>
            </View>
            <Pressable  onPress={onpress} style={style.slider_search_header}>
              <Text>search</Text>
            </Pressable>
          </View>
          <View style={style.slider_inbox_header}>
            <Text style={style.slider_inbox_header.slider_text_header}>
              Inbox
            </Text>
          </View>
          <View style={style.slider_joinroom_button}>
            <LinearGradient
             
              style={style.slider_joinroom_button.joinroom_button}
              colors={["#84c6f8", "#6498fc", "#4d75fe"]}
              start={{ x: 0.1, y: 0.5 }}
            >
              <TextInput
                style={style.slider_joinroom_button.joinroom_button.text}
                placeholder="Join room"
              ></TextInput>
            </LinearGradient>
            <Pressable style={style.slider_joinroom_button.create_button}  onPress={onlogin}>
              <Text style={style.slider_joinroom_button.create_button.text}>
                +
              </Text>
            </Pressable>
          </View>
          <View style={style.listContainer}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <View style={islisthover ? style.listContainer.list : {...style.listContainer.list , ...style.hover}}>
                    <View style={style.list_top}>
                    <Image
                      fadeDuration={500}
                      style={style.list_top.image}
                      source={require("./chat-app-design.jpg")}
                    ></Image>
                  </View>

                  <View style={style.list_middle}>
                    <Text style={style.list_middle.text}>{item}</Text>
                    <Text style={style.list_middle.text_bottom}>
                      {item}
                    </Text>
                  </View>
                  <View style={style.list_bottom}>
                    <Text style={style.list_bottom.text}>2m</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={style.footer}>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LayoutSlider;
