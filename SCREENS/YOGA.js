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
    NAME: "Four-Limbed Staff",
    MOBILENUMBER: "Meccan-verses7",
    arabic: "الفاتحة‎",
    imageurl:
      "https://manflowyoga.com/wp-content/uploads/2019/11/manflowyoga_yogaformen_beginners_warrior2-HQ.jpg",
    imageurl1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_VpZJXBsup-BM4dW4_bp853WdpGhuF9I-VMVw0DVibRhfDguMwJZucsE3Tm48RGEA_Q&usqp=CAU",
  },
  {
    NUM: "BACK",
    NAME: "Seated Half-Spinal Twist",
    MOBILENUMBER: "Medinan-verses:286 ",
    arabic: "البقرة",
    imageurl:
      "https://healthymagazine.com/wp-content/uploads/2016/06/yogaformen.jpg",

    imageurl1:
      "https://fsa.zobj.net/crop.php?r=nXVt2VzIX48IF49S15FFk5Bt5RkEYbznf69uLH7B-SBdl7hhDkJo74S5Z23YtH06z0xp4H2AsDwrUMoxIQtJI_aU99ypCUtKq0XzzoyFmw0GUH7fTyIsRFJP3t0eue0-FXnXFCESy35FrP-ewhN1aFzXOBWPEg8iHZyL0cq4QW4Il_ZFlgCUJ8H_DtM",
  },
  {
    NUM: "SHOULDER",
    NAME: "Corpse ",
    MOBILENUMBER: "Medinan-Verses:200",
    arabic: "آل عمران‎",
    imageurl:
      "https://manflowyoga.com/wp-content/uploads/2019/11/Manflowyoga_yogaformen_beginners_boatpose2-HQ.jpg",
    imageurl1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdGfivu4GApvUsAIPkjFQqhCCkFc9y35PZKgVnLxVdcS8d4ul-oFrJpGY94YVUC0nyJ0&usqp=CAU",
  },
  {
    NUM: "ABS",
    NAME: "Tadasana",
    MOBILENUMBER: "Mednian-verses:176",
    arabic: "ٱلنساء‎",
    imageurl:
      "https://cdn.shopify.com/s/files/1/0053/0114/1604/files/natural-force-blog-natural-force-blog-yoga-poses-recovery-featured_v1.jpg?v=1547164717",
    imageurl1:
      "https://tmoniquestephens.com/wp-content/uploads/2015/06/bigstock-bodybuilder-posing-81189725.jpg",
  },
  {
    NUM: "ABS",
    NAME: "Malasana",
    MOBILENUMBER: "Mednian-verses:176",
    arabic: "ٱلنساء‎",
    imageurl:
      "https://manflowyoga.com/wp-content/uploads/2019/11/manflowyoga_yogaformen_beginners_lizard_with_block-HQ.jpg",
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
          backgroundColor: "#f08080",
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
          <View style={{ flexDirection: "row", marginTop: 10, bottom: 25 }}>
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
    backgroundColor: "#fffff0",
  },

  Card: {
    width: 300,
    height: 250,

    top: 20,
    borderRadius: 10,
    left: 30,
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
