import React, { Component, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  Pressable,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import style from "./style";

const Layout = () => {
  const [islisthover, setislisthover] = useState(null);
  const on_list_hover_start = (itemId) => {
    setislisthover(itemId);
  };
  
  const on_list_hover_end = () => {
    setislisthover(null);
  };
  const data = [
    { id: "1", text: "Item 1", description: "description" },
    { id: "2", text: "Item 2", description: "description" },
    { id: "3", text: "Item 3", description: "description" },
    { id: "4", text: "Item 3", description: "description" },
    { id: "5", text: "Item 3", description: "description" },
    { id: "6", text: "Item 3", description: "description" },
    { id: "7", text: "Item 3", description: "description" },
    { id: "10", text: "Item 3", description: "description" },
    { id: "5", text: "Item 3", description: "description" },
    { id: "6", text: "Item 3", description: "description" },
    { id: "7", text: "Item 3", description: "description" },
    { id: "10", text: "Item 3", description: "description" },
    
  ];
  const newdata =[]
  // for (let index = 0; index < 100; index++) {
  //   newdata[index] = {"id":index,"text":"listitem "+index}
  //   console.log(newdata)
  // }

  return (
    <SafeAreaView>
      <View style={style.layout}>
        <View style={style.slider}>
          <View style={style.slider_header}>
            <Pressable style={style.slider_button_header}>
              <Text>inbox</Text>
            </Pressable>
            <Pressable style={style.slider_search_header}>
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
              sha
              style={style.slider_joinroom_button.joinroom_button}
              colors={["#84c6f8", "#6498fc", "#4d75fe"]}
              start={{ x: 0.1, y: 0.5 }}
            >
              <TextInput
                style={style.slider_joinroom_button.joinroom_button.text}
                placeholder="Join room"
              ></TextInput>
            </LinearGradient>
            <Pressable style={style.slider_joinroom_button.create_button}>
              <Text style={style.slider_joinroom_button.create_button.text}>
                +
              </Text>
            </Pressable>
          </View>
 
          <ScrollView style={style.listContainer}>
            {data.map &&
              data.map((data1) => (
                <View
                style={{
                  ...style.listContainer.list,
                  ...(data1.id === islisthover ? style.hover : {}),
                }}
                // key={data1.id}
                onTouchStart={() => on_list_hover_start(data1.id)}
                onTouchEnd={() => on_list_hover_end(data1.id)}
              >
                  <View style={style.list_top}>
                    <Image
                      fadeDuration={500}
                      style={style.list_top.image}
                      source={require("./chat-app-design.jpg")}
                    ></Image>
                  </View>

                  <View style={style.list_middle}>
                    <Text style={style.list_middle.text}>{data1.text}</Text>
                    <Text style={style.list_middle.text_bottom}>
                      {data1.id}
                    </Text>
                  </View>
                  <View style={style.list_bottom}>
                    <Text style={style.list_bottom.text}>2m</Text>
                  </View>
                </View>
              ))}
          </ScrollView>

        </View>
      </View>
  
    </SafeAreaView>
  );
};

export default Layout;
