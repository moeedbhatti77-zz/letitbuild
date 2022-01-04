import { StatusBar } from "expo-status-bar";
import React from "react";
import { Component, useState, useEffect } from "react";
import {
  AdMobBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  Modal,
} from "react-native";
import { Item, Input, Label, Icon, Card, Button } from "native-base";
import EXPO from "expo";

import firebase from "firebase";
import { firebaseConfig } from "../COMPONENTS/firebaseconfig";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";

export default function login({ navigation }) {
  useEffect(() => {
    setTestDeviceIDAsync("Andriod");
  }, [300]);

  const [speed, SetSpeed] = useState("");
  const [time, SetTime] = useState("");
  const [Distance, SetDistance] = useState("");

  function saveItem(speed, time, Distance) {
    if (Distance >= 500) {
      var cal;
      cal = speed * 0.03;
      var km;
      km = Distance / 1000;

      Alert.alert(
        "Congratulation You did a Great           Job",
        `Number Of Calories Burned       Today : ${cal} 
Distance Coverd IN KM : ${km}`,

        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Button Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Button Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Atleast Run About 500 Meters In Order To Set  Running Goals "
      );
    }
    SetSpeed("");
    SetTime("");
    SetDistance("");
  }

  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/5020153.jpg",
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <StatusBar style="light" />
      <View style={{ top: 80, left: 10 }}>
        <Text style={styles.text}> Set Your Running Goals</Text>
      </View>
      <View>
        <View style={{ top: 20 }}>
          <View style={{ top: 110 }}>
            <Text style={styles.txt1}>Steps</Text>
            <Item fixedLabel style={{ width: "90%", left: 10 }}>
              <Input
                style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                placeholder="Enter The Number Of Steps "
                onChangeText={(speed) => SetSpeed(speed)}
              />
            </Item>
          </View>
          <View style={{ top: 120, marginTop: 20 }}>
            <Text style={styles.txt1}>Time</Text>
            <Item fixedLabel style={{ width: "90%", left: 10 }}>
              <Input
                style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                placeholder="Enter The Time "
                onChangeText={(time) => SetTime(time)}
              />
            </Item>
          </View>
          <View style={{ top: 130, marginTop: 20 }}>
            <Text style={styles.txt1}>Distance</Text>
            <Item fixedLabel style={{ width: "90%", left: 10 }}>
              <Input
                style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                placeholder="Enter The Distance in Meters  "
                onChangeText={(Distance) => SetDistance(Distance)}
              />
            </Item>
          </View>
          <Button
            style={{
              top: 100,
              marginTop: 90,
              left: 45,
              width: "70%",
              backgroundColor: "#48d1cc",
              borderRadius: 10,
            }}
            block
            onPress={() => {
              saveItem(speed, time, Distance);
            }}
          >
            <Text style={{ fontWeight: "bold" }}>CALCULATE</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
  },
  login: {
    backgroundColor: "#fff",
    top: "33%",
  },
  card: {
    backgroundColor: "#fff",
    height: "80%",
    width: "90%",
    left: 16,
    top: 90,
    borderRadius: 30,
  },
  text: {
    fontFamily: "Raleway_700Bold_Italic",
    fontSize: 27,
    color: "#fff",
  },
  txt: {
    color: "red",
    fontWeight: "bold",
    top: 10,
  },
  tx: {
    color: "red",
    fontWeight: "bold",
    top: 30,
  },
  txt1: {
    color: "#48d1cc",
    fontSize: 20,
    left: 10,
    fontWeight: "bold",
  },
  image: {
    height: 50,
    width: 50,
    left: 60,
  },
  image1: {
    height: 70,
    width: 70,
  },
});
