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
    NAME: "Front Squat",
    MOBILENUMBER: "Meccan-verses7",
    arabic: "الفاتحة‎",
    imageurl:
      "https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/10/front-squat_1.jpg",
    imageurl1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_VpZJXBsup-BM4dW4_bp853WdpGhuF9I-VMVw0DVibRhfDguMwJZucsE3Tm48RGEA_Q&usqp=CAU",
  },
  {
    NUM: "BACK",
    NAME: "Kettle Bell",
    MOBILENUMBER: "Medinan-verses:286 ",
    arabic: "البقرة",
    imageurl: "https://www.power-systems.com/shop/images/category/large/3.jpg",

    imageurl1:
      "https://fsa.zobj.net/crop.php?r=nXVt2VzIX48IF49S15FFk5Bt5RkEYbznf69uLH7B-SBdl7hhDkJo74S5Z23YtH06z0xp4H2AsDwrUMoxIQtJI_aU99ypCUtKq0XzzoyFmw0GUH7fTyIsRFJP3t0eue0-FXnXFCESy35FrP-ewhN1aFzXOBWPEg8iHZyL0cq4QW4Il_ZFlgCUJ8H_DtM",
  },
  {
    NUM: "SHOULDER",
    NAME: "Cindy",
    MOBILENUMBER: "Medinan-Verses:200",
    arabic: "آل عمران‎",
    imageurl:
      "https://www.journalmenu.com/wp-content/uploads/2017/10/you-can-do-a-pullup.jpg",
    imageurl1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdGfivu4GApvUsAIPkjFQqhCCkFc9y35PZKgVnLxVdcS8d4ul-oFrJpGY94YVUC0nyJ0&usqp=CAU",
  },
  {
    NUM: "ABS",
    NAME: "Barbell Deadlift",
    MOBILENUMBER: "Mednian-verses:176",
    arabic: "ٱلنساء‎",
    imageurl:
      "https://athlosfitness.ca/media/wysiwyg/the_barbell_deadlift_workout.jpg",
    imageurl1:
      "https://tmoniquestephens.com/wp-content/uploads/2015/06/bigstock-bodybuilder-posing-81189725.jpg",
  },
  {
    NUM: "ABS",
    NAME: "Shoulder Press",
    MOBILENUMBER: "Mednian-verses:176",
    arabic: "ٱلنساء‎",
    imageurl:
      "https://post.healthline.com/wp-content/uploads/2019/04/Female_-Barbell_1200x628-facebook.jpg",
    imageurl1:
      "https://tmoniquestephens.com/wp-content/uploads/2015/06/bigstock-bodybuilder-posing-81189725.jpg",
  },
];

const CROSSFIT = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Header
        style={{
          marginTop: 40,
          backgroundColor: "#daa520",
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
          <View style={{ flexDirection: "row", bottom: 20 }}>
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
          </View>
        )}
        keyExtractor={({ id }, index) => index.toString()}
      ></FlatList>
    </View>
  );
};
export default CROSSFIT;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Card: {
    width: 350,
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
