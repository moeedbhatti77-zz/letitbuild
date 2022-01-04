import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import firebase from "firebase";
import { firebaseConfig } from "../COMPONENTS/firebaseconfig";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const fire1 = firebase.firestore().collection("FTINESSFIRST");

import { Item, Input, Label, Icon } from "native-base";

const PACKAGE = ({ navigation }) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
  export default PACKAGE;
};
