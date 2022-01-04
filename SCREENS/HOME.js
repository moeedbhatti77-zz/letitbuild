import React, { Component, useState, useEffect } from "react";
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
const increment = firebase.firestore.FieldValue.increment(1);

// Document reference
const storyRef = db.collection("FITNESSEVALUATION1");
const HOME = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [NAME, setNAME] = useState("");
  const [USERNAME, setUSERNAME] = useState("");
  const [CITY, setCITY] = useState("");
  const [PHONE, setPHONE] = useState("");
  const [ACCOUNT, setACCOUNT] = useState("");
  const [PACKAGE, setPACKAGE] = useState("");
  const [PRESENT, setPRESWNT] = useState("");

  function saveItem(email, ATTENDENCE) {
    var newArray = [];

    storyRef.doc(email).update({
      ATTENDENCE: increment,
    });
    storyRef
      .where(firebase.firestore.FieldPath.documentId(), "==", email)

      .get()

      .then((querySnapshot) => {
        console.log("Total users: ", querySnapshot.size);

        querySnapshot.forEach((documentSnapshot) => {
          ATTENDENCE = ATTENDENCE + increment;
          newArray.push(documentSnapshot.data());
        });
      });

    storyRef.get().then((testing) => {
      console.log("New Array Push is =", newArray);
      setEmail(newArray);

      setNAME("EMAIL:");
      setUSERNAME("USERNAME:");
      setCITY("CITY:");
      setPHONE("PHONE#:");
      setPACKAGE("MEMBERSHIP PLAN :");
      setACCOUNT("ACCOUNT NUMBER:");
      setPRESWNT("TOTAL PRESENT :");
    });
  }
  // function renderText(ATTENDENCE) {
  //   if (ATTENDENCE === "1") {
  //     return <Text>{item.ATTENDENCE} </Text>;
  //   }
  // }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <Text style={styles.text}> Add Attendence </Text>
      <Item regular style={{ width: "90%", left: 16, top: 10 }}>
        <Label>
          <Icon name="person" />
        </Label>
        <Input
          placeholder="Enter EMAIL"
          value={email}
          onChangeText={setEmail}
        />
      </Item>

      <TouchableOpacity
        onPress={() => {
          saveItem(email);
        }}
        style={{ top: 30 }}
      >
        <Image
          source={{
            uri: "https://www.pngarts.com/files/3/Next-Button-Transparent-Image.png",
          }}
          style={styles.image1}
        />
      </TouchableOpacity>
      <View style={{ top: 50 }}>
        <Text style={styles.text}> Personal Information </Text>
      </View>
      <View
        style={{
          top: 60,
        }}
      >
        <FlatList
          style={{}}
          data={email}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 80,
                paddingLeft: 10,
                paddingTop: 10,
              }}
            >
              <Text>
                {" "}
                <Text style={{ fontWeight: "bold" }}>{NAME}</Text>
                {item.Email} {item.email}
              </Text>

              <Text style={styles.txt}>
                <Text style={{ fontWeight: "bold" }}>{USERNAME}</Text>
                {item.username}{" "}
              </Text>
              <Text style={styles.txt1}>
                <Text style={{ fontWeight: "bold" }}>{CITY}</Text>

                {item.Address}
              </Text>

              <Text style={styles.txt2}>
                <Text style={{ fontWeight: "bold" }}>{PHONE}</Text>
                {item.Phone}{" "}
              </Text>
              <Text style={styles.txt3}>
                <Text style={{ fontWeight: "bold" }}>{PACKAGE}</Text>
                {item.MEMBERSHIP_PLAN}{" "}
              </Text>
              <Text style={styles.txt4}>
                <Text style={{ fontWeight: "bold" }}>{ACCOUNT}</Text>
                {item.AccountNUMBER}{" "}
              </Text>

              <Text style={styles.txt5}>
                <Text style={{ fontWeight: "bold" }}>{PRESENT}</Text>
                {item.ATTENDENCE}{" "}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default HOME;
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
    left: "40%",
  },
  text: {
    fontFamily: "Raleway_700Bold_Italic",
    fontSize: 20,
    left: 10,
    color: "#cd5c5c",
  },
  txt: {
    top: 10,
  },
  txt1: {
    top: 20,
  },
  txt2: {
    top: 30,
  },
  txt3: {
    top: 40,
  },
  txt4: {
    top: 50,
  },
  txt5: {
    top: 60,
  },
});
