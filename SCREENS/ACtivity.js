import React, { Component } from "react";
import {
  Button,
  View,
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
  Text,
  Icon,
  Right,
} from "native-base";
const items = [
  {
    NUM: "1",
    NAME: "Al-Faatiha",
    MOBILENUMBER: "Meccan-verses7",
    arabic: "الفاتحة‎",
    imageurl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/GM-Diet-Day-1.jpg.webp",
  },
  {
    NUM: "2",
    NAME: "Al-Baqara",
    MOBILENUMBER: "Medinan-verses:286 ",
    arabic: "البقرة",
    imageurl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/GM-Diet-Day-2-1.jpg.webp",
  },
  {
    NUM: "3",
    NAME: "Aal-i-mraan",
    MOBILENUMBER: "Medinan-Verses:200",
    arabic: "آل عمران‎",
    imageurl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/GM-Diet-Day-3-1.jpg.webp",
  },
  {
    NUM: "4",
    NAME: "An-Nisaa",
    MOBILENUMBER: "Mednian-verses:176",
    arabic: "ٱلنساء‎",
    imageurl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/GM-Diet-Day-4-1.jpg.webp",
  },
  {
    NUM: "5",
    NAME: "Al-Maaida",
    MOBILENUMBER: "Medinan-verses:120",
    arabic: "ٱلمائدة‎‎",
    imageurl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/GM-Diet-Day-5-1.jpg.webp",
  },
  {
    NUM: "6",
    NAME: "Al-An-aam",
    MOBILENUMBER: "Medinan-verses:165",

    arabic: "الأنعام‎",
    imageurl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/GM-Diet-Day-6-1.jpg.webp",
  },
  {
    NUM: "7",
    NAME: "Al-A-raaf",
    MOBILENUMBER: "Meccan-verses:206",
    arabic: "الأعراف‎",
    imageurl:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/GM-Diet-Day-7-1.jpg.webp",
  },
];

const ACtivity = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <View style={{ width: "56%", top: 10, left: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Firebase")}>
          <Text
            style={{
              fontFamily: "Raleway_700Bold_Italic",

              color: "#cd5c5c",
            }}
          >
            {" "}
            DIET PLAN FOR WEIGHT LOSS AND GAIN
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={{}}>
            <Card style={styles.Card}>
              <Image
                source={{
                  uri: item.imageurl,
                }}
                style={styles.image}
              ></Image>
            </Card>
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
