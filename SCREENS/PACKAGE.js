import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";

import {
  Button,
  View,
  ScrollView,
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
import firebase from "firebase";
import { firebaseConfig } from "../COMPONENTS/firebaseconfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
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
import { color } from "react-native-reanimated";
const fire1 = firebase.firestore().collection("FITNESSEVALUATION1");

const PACKAGE = ({ navigation, route }) => {
  const db = route.params.mail;
  Alert.alert(db);

  const [emailerror, setEmailerror] = useState("");
  const [pasword, setPasword] = useState("");
  const [error, setError] = useState("");

  function saveItem(db) {
    // try {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(emailerror, pasword)
    //     .catch((error) => {
    //       alert("Error occurred", error);
    //     });
    // } catch (err) {
    //   alert("Error occurred", err);
    // }
    fire1
      .doc(db)
      .update({
        MEMBERSHIP_PLAN: "1 MONTH ",
        Package: "4000",
      })
      .then(() => {
        Alert.alert("PACKAGE SUCCESSFULLY ADDED");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
  function saveItem1(db) {
    // try {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(emailerror, pasword)
    //     .catch((error) => {
    //       alert("Error occurred", error);
    //     });
    // } catch (err) {
    //   alert("Error occurred", err);
    // }
    fire1
      .doc(db)
      .update({
        MEMBERSHIP_PLAN: "6 MONTH",
        Package: "24000RS",
      })
      .then(() => {
        Alert.alert("PACKAGE SUCCESSFULLY ADDED");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
  function saveItem2(db) {
    // try {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(emailerror, pasword)
    //     .catch((error) => {
    //       alert("Error occurred", error);
    //     });
    // } catch (err) {
    //   alert("Error occurred", err);
    // }
    fire1
      .doc(db)
      .update({
        MEMBERSHIP_PLAN: " 12 MONTH",
        Package: "48000",
      })
      .then(() => {
        Alert.alert("PACKAGE SUCCESSFULLY ADDED");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  return (
    <View style={styles.Container}>
      <Header style={{ backgroundColor: "#fff", marginTop: 35 }}>
        <Text style={{ top: 15, fontFamily: "Raleway_700Bold_Italic" }}>
          {" "}
          MEMBERSHIP PLAN{" "}
        </Text>
      </Header>
      <StatusBar style="dark" />

      <View>
        <Card style={styles.Card}>
          <TouchableOpacity onPress={() => saveItem(db)}>
            <ImageBackground
              source={{
                uri: "https://media.istockphoto.com/photos/blur-gym-background-fitness-center-or-health-club-with-blurry-sports-picture-id1125482625?k=6&m=1125482625&s=170667a&w=0&h=Rno_VZvu_AfKMO7vcsKAPbPBOw2dakz7f_SsV7iTG7E=",
              }}
              style={styles.image}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  MEMEPERSHIP PLAN FOR ONE MONTH
                </Text>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  4000 RS
                </Text>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  ADD TO CART
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </Card>

        <Card style={styles.Card}>
          <TouchableOpacity onPress={() => saveItem1(db)}>
            <ImageBackground
              source={{
                uri: "https://media.istockphoto.com/photos/blur-gym-background-fitness-center-or-health-club-with-blurry-sports-picture-id1005124232?k=6&m=1005124232&s=170667a&w=0&h=olpCzlYPYP8RQUBgH9pyytcQ4oWH_aLvNvo-njEdqpo=",
              }}
              style={styles.image}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  MEMEPERSHIP PLAN FOR SIX MONTH
                </Text>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  24000 RS
                </Text>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  ADD TO CART
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </Card>
        <Card style={styles.Card}>
          <TouchableOpacity onPress={() => saveItem2(db)}>
            <ImageBackground
              source={{
                uri: "https://file.sposhiru.com/article/thumbnail/3bf409f683e6e07c3aeb413c220c540d.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJQHQSGKZCUMH3SZA%2F20200612%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20200612T143457Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=babcbaa0291e02cbb118f860469825b9049224da2c6e1ac0875d2ecadab78e86",
              }}
              style={styles.image}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  MEMEPERSHIP PLAN FOR WELVE MONTH
                </Text>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  48000 RS
                </Text>
                <Text
                  style={{
                    fontFamily: "Raleway_800ExtraBold_Italic",
                  }}
                >
                  {" "}
                  ADD TO CART
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </Card>
      </View>
      <TouchableOpacity
        style={{ bottom: 60 }}
        onPress={() => navigation.navigate("PAYMENT", { mail: db })}
      >
        <Image
          source={{
            uri: "https://www.pngarts.com/files/3/Next-Button-Transparent-Image.png",
          }}
          style={styles.image1}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PACKAGE;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Card: {
    width: "90%",
    height: "28%",
    left: "4%",
    top: 10,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    // left: 3,
    // top: 3,
    borderRadius: 30,
  },
  image1: {
    height: 50,
    width: 50,
    left: "80%",
  },
});
