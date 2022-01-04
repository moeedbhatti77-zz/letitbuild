import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
  SafeAreaView,
} from "react-native";

import Tab1 from "./ACCOUNT";
import Tab2 from "./ACtivity";
import Tab3 from "./HOME";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Left,
  Tab,
  Tabs,
  TabHeading,
  Button,
} from "native-base";
import { Icon } from "react-native-elements";

import firebase from "firebase";
import { firebaseConfig } from "../COMPONENTS/firebaseconfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const fire1 = firebase.firestore().collection("FITNESSEVALUATION1");

export function Fetch(props) {
  const [email, setEmail] = useState("");
  function saveItem() {
    var newArray = [];
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert(error);
      });
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: "30%" }}>
      <View style={{ left: 10, bottom: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Raleway_700Bold_Italic",
            color: "black",
          }}
        >
          {" "}
          FITNESS EVALUATION{" "}
        </Text>
      </View>

      <TouchableOpacity onPress={() => saveItem()}>
        <View style={{ right: "40%" }}>
          <Icon name="exit-outline" type="ionicon" color="red" />
        </View>
        <Text style={styles.txt2}>SIGN OUT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("THERE IS A WORK ")}>
        <View style={{ right: "40%" }}>
          <Icon name="document-outline" type="ionicon" color="red" />
        </View>

        <Text style={styles.txt2}>INFORMATION </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ top: "75%", left: 10 }}>
        <View style={{ right: "40%" }}>
          <Icon name="settings-outline" type="ionicon" color="red" />
        </View>

        <Text style={styles.txt2}>SETTINGS</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const COLORS = {
  primary: "red",
  white: "#fff",
  black: "#000",
};
const consol = ({ navigation, route }) => {
  // const db = route.params.mail;
  // const name = route.params.em;
  // const { user } = route.params;
  // Alert.alert(user.name);

  return (
    <View style={styles.Container}>
      <Header style={{ backgroundColor: "#48d1cc", marginTop: 30 }} hasTabs>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            right: 160,
            top: 10,
          }}
        >
          <Icon name="menu" />
        </TouchableOpacity>
      </Header>
      <StatusBar style="dark" />
      <Tabs
        style={{ backgroundColor: COLORS.primary, bottom: 20 }}
        activeTabStyle={{ backgroundColor: COLORS.primary }}
      >
        <Tab
          tabStyle={{ backgroundColor: COLORS.primary }}
          activeTabStyle={{ backgroundColor: COLORS.primary }}
          heading={
            <TabHeading style={{ backgroundColor: "#48d1cc" }}>
              <Icon name="home" />
              <Text style={styles.txt}>HOME</Text>
            </TabHeading>
          }
        >
          <Tab1 navigation={navigation} />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#48d1cc" }}>
              <Icon name="article" />
              <Text style={styles.txt}>ARTICLES</Text>
            </TabHeading>
          }
        >
          <Tab2 navigation={navigation} />
        </Tab>
        <Tab
          tabStyle={{ backgroundColor: COLORS.primary }}
          activeTabStyle={{ backgroundColor: COLORS.primary }}
          heading={
            <TabHeading style={{ backgroundColor: "#48d1cc" }}>
              <Icon name="person" />
              <Text style={styles.txt}>ACCOUNT </Text>
            </TabHeading>
          }
        >
          <Tab3 navigation={navigation} />
        </Tab>
      </Tabs>
    </View>
  );
};
export default consol;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  login: {
    backgroundColor: "#fff",
    top: "33%",
  },
  card: {
    backgroundColor: "#fff",
    height: "70%",
    width: "90%",
    left: 16,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  txt: {
    left: 10,
    fontWeight: "bold",
    fontSize: 10,
  },
  txt2: {
    left: 43,
    fontWeight: "bold",
    bottom: 22,
  },
  tx: {
    color: "red",
    fontWeight: "bold",
    top: 30,
  },
  image: {
    height: 50,
    width: 50,
    left: 100,
  },
  image1: {
    height: 70,
    width: 70,
    left: 150,
    bottom: 60,
  },
});
