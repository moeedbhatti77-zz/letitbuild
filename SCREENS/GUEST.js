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
import { defineAnimation } from "react-native-reanimated";

const login = (props) => {
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
        <Text style={styles.text}> FITNESS EVALUATION </Text>
        <Text style={{ color: "#fff", fontSize: 20 }}>
          {" "}
          A Fitness Evaluation - exercises and activities performed inside,
          often using equipment, especially when done as a subject at school.
          Gymnasium is a large room with equipment for exercising the body and
          increasing strength or a club where you can go to exercise and keep
          fit. A gym is a gymnasium, also known as health club and fitness
          centre. Gymnasiums have moved away just being a location for
          gymnastics. Where they had gymnastics apparatus such as bar bells,
          parallel bars, jumping boards and running path etc. If you are looking
          to join a gymnastics club, please see gymnastics. A health club,
          fitness centre is now commonly referred to as a gym. If you are
          looking to join a gymnastics club, please see gymnastics. A health
          club, fitness centre is now commonly referred to as a gym.{" "}
        </Text>
        <Button
          style={{
            top: 40,
            left: 50,
            width: "70%",
            backgroundColor: "#48d1cc",
          }}
          block
          onPress={() => {
            props.navigation.navigate("Registar");
          }}
        >
          <Text style={{ fontWeight: "bold" }}> Continue TO Regsteration </Text>
        </Button>
      </View>
    </ImageBackground>
  );
};
export default login;
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
