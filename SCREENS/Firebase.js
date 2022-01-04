import React, { useState, useEffect } from "react";
import { Fetch } from "../SCREENS/console";
import {} from "../SCREENS/Login";
import {
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

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Left,
  Icon,
  Tab,
  Tabs,
  TabHeading,
  Button,
} from "native-base";
import firebase from "firebase";
import { firebaseConfig } from "../COMPONENTS/firebaseconfig";
import { interpolate } from "react-native-reanimated";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const fire1 = firebase.firestore().collection("FITNESSEVALUATION1");
const db = firebase.firestore();

// Document reference
const storyRef = db.collection("FITNESSEVALUATION1");
const Firebase = () => {
  const items = () => {
    firebase
      .database()
      .ref(`User/`)
      .on("value", (snapshot) => {
        let responselist = Object.values(snapshot.val());
        setData(responselist);
        console.log(snapshot.val());
        setLoading(true);
      });
  };

  useEffect(() => {
    items();
  }, []);

  const [email, setEmail] = useState("");
  const [NAME, setNAME] = useState("");
  const [USERNAME, setUSERNAME] = useState("");
  const [CITY, setCITY] = useState("");
  const [PHONE, setPHONE] = useState("");
  const [ACCOUNT, setACCOUNT] = useState("");
  const [PACKAGE, setPACKAGE] = useState("");
  const [PRESENT, setPRESWNT] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState("");

  return (
    <View style={styles.Container}>
      <View style={{ top: 50 }}>
        <Text style={styles.tex}> Data Fetch BY Realtime Database </Text>
        <View style={{ top: 10, height: "90%", right: 10 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={{ margin: 18 }}>
                <Text>
                  {" "}
                  <Text style={{ fontWeight: "bold" }}> EMAIL : </Text>
                  {item.Email} {item.email}
                </Text>

                <Text style={styles.txt}>
                  <Text style={{ fontWeight: "bold" }}>USERNAME : </Text>
                  {item.username}{" "}
                </Text>
                <Text style={styles.txt1}>
                  <Text style={{ fontWeight: "bold" }}>CITY : </Text>

                  {item.Address}
                </Text>

                <Text>
                  <Text style={{ fontWeight: "bold" }}>PHONE :</Text>
                  {item.Phone}{" "}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>GENDER:</Text>
                  {item.Gender}{" "}
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>DOB: </Text>
                  {item.DOB}{" "}
                </Text>
              </View>
            )}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};
export default Firebase;
const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: "#fff",
  },

  tex: {
    fontFamily: "Raleway_700Bold_Italic",
    fontSize: 20,

    color: "#cd5c5c",
    top: 10,
  },
});
