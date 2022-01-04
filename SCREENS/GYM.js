import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  flex,
  SafeAreaView,
} from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  Right,
} from "native-base";
const items = [
  {
    NUM: "BICEPS",
    NAME: "CHEST",
    MOBILENUMBER: "Meccan-verses7",
    arabic: "الفاتحة‎",
    imageurl:
      "https://c0.wallpaperflare.com/preview/722/71/821/athlete-black-and-white-body-body-building.jpg",
    imageurl1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_VpZJXBsup-BM4dW4_bp853WdpGhuF9I-VMVw0DVibRhfDguMwJZucsE3Tm48RGEA_Q&usqp=CAU",

    key: "1",
  },
  {
    NUM: "BACK",
    NAME: "TRICEPS",
    MOBILENUMBER: "Medinan-verses:286 ",
    arabic: "البقرة",
    imageurl:
      "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

    imageurl1:
      "https://fsa.zobj.net/crop.php?r=nXVt2VzIX48IF49S15FFk5Bt5RkEYbznf69uLH7B-SBdl7hhDkJo74S5Z23YtH06z0xp4H2AsDwrUMoxIQtJI_aU99ypCUtKq0XzzoyFmw0GUH7fTyIsRFJP3t0eue0-FXnXFCESy35FrP-ewhN1aFzXOBWPEg8iHZyL0cq4QW4Il_ZFlgCUJ8H_DtM",
  },
  {
    NUM: "SHOULDER",
    NAME: "WINGS",
    MOBILENUMBER: "Medinan-Verses:200",
    arabic: "آل عمران‎",
    imageurl: "https://static3.bigstockphoto.com/6/3/1/large1500/136423265.jpg",
    imageurl1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdGfivu4GApvUsAIPkjFQqhCCkFc9y35PZKgVnLxVdcS8d4ul-oFrJpGY94YVUC0nyJ0&usqp=CAU",
  },
  {
    NUM: "ABS",
    NAME: "LEG",
    MOBILENUMBER: "Mednian-verses:176",
    arabic: "ٱلنساء‎",
    imageurl: "https://static1.bigstockphoto.com/1/3/3/large1500/331877956.jpg",
    imageurl1:
      "https://tmoniquestephens.com/wp-content/uploads/2015/06/bigstock-bodybuilder-posing-81189725.jpg",
  },
];

const ACtivity = (props) => {
  function onclick_item(key) {
    switch (key) {
      case "1":
        props.navigation.navigate("BYCEPS");
        break;
      case "Biceps":
        Alert.alert("HELO");
        break;
      default:
      //whatever you want
    }
  }

  return (
    <View style={styles.Container}>
      <Header
        style={{
          marginTop: 40,
          backgroundColor: "#2f4f4f",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Raleway_700Bold_Italic",
            color: "#fff",
            fontSize: 20,
          }}
        >
          {" "}
          Select Your Excercise{" "}
        </Text>
      </Header>

      <StatusBar style="light" />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", bottom: 15 }}>
            <TouchableOpacity onPress={() => onclick_item(item.key)}>
              <Card style={styles.Card}>
                <Image
                  source={{
                    uri: item.imageurl,
                  }}
                  style={styles.image}
                ></Image>
                <View
                  style={{
                    bottom: 40,
                    backgroundColor: "#fff",
                    height: "20%",
                    borderRadius: 5,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15, top: 5 }}>
                    {" "}
                    {item.NAME}{" "}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
            <View style={{ left: 5 }}>
              <Card style={styles.Card}>
                <Image
                  source={{
                    uri: item.imageurl1,
                  }}
                  style={styles.image}
                ></Image>
                <View
                  style={{
                    bottom: 40,
                    backgroundColor: "#fff",
                    height: "20%",
                    borderRadius: 5,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15, top: 5 }}>
                    {" "}
                    {item.NUM}{" "}
                  </Text>
                </View>
              </Card>
            </View>
          </View>
        )}
        keyExtractor={({ id }, index) => index.toString()}
      ></FlatList>
    </View>
  );
};
export default ACtivity;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Card: {
    width: 170,
    height: 200,

    top: 20,
    borderRadius: 10,
    left: 3,
  },
  image: {
    height: "100%",
    width: "100%",
    // left: 3,

    borderRadius: 10,
  },
  image1: {
    height: 50,
    width: 50,
    left: "80%",
    bottom: 30,
  },
});
