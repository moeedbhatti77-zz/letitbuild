import React, { Component, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from "react-native";
import {
  Item,
  Input,
  Label,
  Icon,
  Card,
  Button,
  ListItem,
  Right,
  Left,
} from "native-base";
import { Value } from "react-native-reanimated";
import { RadioButton } from "react-native-paper";
import firebase from "firebase";
import { firebaseConfig } from "../COMPONENTS/firebaseconfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const fire1 = firebase.firestore().collection("FITNESSEVALUATION1");
const PAYMENT = ({ navigation, route }) => {
  const email = route.params.mail;

  const [Account, setAccount] = useState("");

  const [checked, setChecked] = React.useState("first");

  function saveItem(email) {
    fire1
      .doc(email)
      .update({
        AccountNUMBER: Account,
      })
      .then(() => {
        Alert.alert("You Have Successfully Resgistered !");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        }}
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
        }}
      >
        <View style={{ top: 70 }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Raleway_700Bold_Italic",

              color: "#fff",
            }}
          >
            {" "}
            Fitness
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Raleway_700Bold_Italic",

              left: 38,
              color: "#fff",
            }}
          >
            {" "}
            Evaluation
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.login}>
        <Card style={styles.card}>
          <Text style={styles.text}> PAYMENT </Text>
          <View style={{ top: 10 }}>
            <Text style={{ fontWeight: "bold", left: 10 }}>
              {" "}
              SELECT PAYMENT METHOD{" "}
            </Text>
            <ListItem>
              <Left>
                <Text>Debit Card </Text>
              </Left>
              <Right>
                <RadioButton
                  color="black"
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Credit Card </Text>
              </Left>
              <Right>
                <RadioButton
                  color="black"
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>EasyPaisa/ Jazz Cash </Text>
              </Left>
              <Right>
                <RadioButton
                  color="black"
                  value="third"
                  status={checked === "third" ? "checked" : "unchecked"}
                  onPress={() => setChecked("third")}
                />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Other</Text>
              </Left>
              <Right>
                <RadioButton
                  color="black"
                  value="Forth"
                  status={checked === "Forth" ? "checked" : "unchecked"}
                  onPress={() => setChecked("Forth")}
                />
              </Right>
            </ListItem>
          </View>
          <View>
            <Item regular style={{ width: "90%", left: 16, top: 20 }}>
              <Label>
                <Icon name="card" />
              </Label>
              <Input
                placeholder="ENTER ACCOUNT NUMBER "
                value={Account}
                onChangeText={setAccount}
              />
            </Item>
          </View>
          <Button
            style={{
              top: 30,
              width: "90%",
              left: 16,
              backgroundColor: "#48d1cc",
            }}
            block
            onPress={() => {
              saveItem(email);
            }}
          >
            <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
          </Button>
        </Card>
      </View>
    </View>
  );
};
export default PAYMENT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  login: {
    backgroundColor: "#fff",
    top: "20%",
  },
  card: {
    backgroundColor: "#fff",
    height: "80%",
    width: "90%",
    left: 16,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
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
