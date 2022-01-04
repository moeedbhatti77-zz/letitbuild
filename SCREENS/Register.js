import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
  flex,
  SafeAreaView,
} from "react-native";
import firebase from "firebase";
import { firebaseConfig } from "../COMPONENTS/firebaseconfig";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import { Value } from "react-native-reanimated";
import { useSafeArea } from "react-native-safe-area-context";

import {
  useFonts,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_500Medium_Italic,
  Raleway_700Bold_Italic,
} from "@expo-google-fonts/raleway";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Card,
  Icon,
  Button,
} from "native-base";
import { RadioButton } from "react-native-paper";
const fire1 = firebase.firestore().collection("FITNESSEVALUATION1");

const Registar = ({ navigation }) => {
  const db = firebase.database().ref("User");

  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [pasword, setpasword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAdress] = useState("");
  const [checked, setChecked] = React.useState("first");
  const [Male, setMale] = React.useState("Male");
  const [Female, SetFemale] = React.useState("Female");
  const [EmailError, setEmailError] = useState("");
  const [pasworderror, setpaswroderror] = useState("");
  const [adressserro, setAdrresserror] = useState("");
  const [usernameerror, setusernameerror] = useState("");
  const [phoneerror, setphonerror] = useState("");
  const [display, setDisplay] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);

    setDisplay(date.toUTCString());

    setDatePickerVisibility(false);
    hideDatePicker();
  };

  const [isecurity, setisecuirty] = useState(true);

  function saveItem(email, pasword) {
    var newArray = [];

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pasword)
      .then(
        () => {
          if (username == "") {
            setusernameerror("Username CANNOT BE EMPTY");
          }

          if (Address == "") {
            setAdrresserror("Address CANNOT BE EMPTY");
          }
          if (Phone == "") {
            setphonerror("Phone  CANNOT BE EMPTY");
          } else {
            db.push({
              Email: email,
              pasword: pasword,
              username: username,

              Address: Address,
              Phone: Phone,
              Gender: Male,
              DOB: display,
            })
              .then(() => {
                console.log("Document successfully written!");
              })

              .catch((error) => {
                console.error("Error writing document: ", error);
              });

            fire1
              .doc(email)
              .set({
                Email: email,
                pasword: pasword,
                username: username,

                Address: Address,
                Phone: Phone,
                Gender: Male,
                DOB: display,
              })
              .then(() => {
                console.log("Document successfully written!");
                navigation.navigate("PACKAGE", { mail: email });
              })

              .catch((error) => {
                console.error("Error writing document: ", error);
              });

            setEmailError("");
            setpaswroderror("");
            setusernameerror("");
            setAdrresserror("");
            setphonerror("");
          }
        },
        (error) => {
          setEmailError(error.message);
          setpaswroderror(error.message);
        }
      );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
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

      <Card style={styles.card}>
        <Text style={styles.text}> REGISTRATION </Text>
        <Item regular style={styles.form}>
          <Input
            placeholder="Enter EMAIL"
            value={email}
            onChangeText={setEmail}
          />
        </Item>
        <Text style={styles.txt}> {EmailError} </Text>
        <Item regular style={styles.form1}>
          <Input
            placeholder="Enter PASSWORD"
            secureTextEntry={isecurity}
            value={pasword}
            onChangeText={setpasword}
          />
        </Item>
        <Text style={styles.txt}> {pasworderror} </Text>
        <Item regular style={styles.form2}>
          <Input
            placeholder="SET USERNAME"
            value={username}
            onChangeText={setusername}
          />
        </Item>
        <Text style={styles.txt}> {usernameerror} </Text>
        <Item regular style={styles.form3}>
          <Input
            placeholder="Enter ADDRESS"
            value={Address}
            onChangeText={setAdress}
          />
        </Item>
        <Text style={styles.txt}> {adressserro} </Text>
        <Item regular style={styles.form4}>
          <Input
            placeholder="Enter PHONE NUMBER"
            value={Phone}
            onChangeText={setPhone}
          />
        </Item>
        <Text style={styles.txt}> {phoneerror} </Text>
        <View style={styles.main}>
          <View style={{ top: 5 }}>
            <Text
              style={{
                top: 10,
                left: 18,
                fontFamily: "Raleway_700Bold_Italic",
              }}
            >
              {" "}
              GENDER{" "}
            </Text>
            <View style={{ left: "50%", bottom: 37 }}>
              <Text
                style={{
                  top: 25,
                  right: 50,
                  fontFamily: "Raleway_200ExtraLight_Italic",
                }}
              >
                {" "}
                Male{" "}
              </Text>

              <RadioButton
                color="black"
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Input value={Male} onChangeText={setMale} />
            </View>

            <View style={{ left: "80%", bottom: 90 }}>
              <Text
                style={{
                  top: 24,
                  right: 50,
                  fontFamily: "Raleway_200ExtraLight_Italic",
                }}
              >
                {" "}
                Female{" "}
              </Text>
              <RadioButton
                color="black"
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Input value={Female} onChangeText={SetFemale} />
            </View>
          </View>
          <View style={{ bottom: 70 }}>
            <Text
              style={{
                top: 5,
                left: 18,
                fontFamily: "Raleway_700Bold_Italic",
              }}
            >
              {" "}
              DATE OF BIRTH{" "}
            </Text>
            <TouchableOpacity onPress={showDatePicker}>
              <Image
                source={{
                  uri: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png",
                }}
                style={styles.image}
              />
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <View style={{ width: 140, left: 180, bottom: 65 }}>
              <Item regular>
                <Text> {display} </Text>
              </Item>
            </View>
          </View>
        </View>

        <View style={{ bottom: "37%", left: "20%" }}>
          <TouchableOpacity onPress={() => saveItem(email, pasword)}>
            <Text
              style={{
                color: "#48d1cc",
              }}
            >
              {" "}
              SELECT MEMBERSHIP PLAN{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};
export default Registar;
const styles = StyleSheet.create({
  eye: {
    color: "blue",
    position: "absolute",
    right: 30,
    bottom: 30,
  },
  // login: {
  //   backgroundColor: "#fff",
  //   top: "40%",
  //   flex: 1,
  // },
  card: {
    backgroundColor: "#fff",
    height: "70%",
    width: "90%",
    left: 16,
    top: "25%",
  },
  form: {
    width: "90%",
    left: 16,
    top: 10,
  },
  form1: {
    width: "90%",
    left: 16,
    top: 10,
  },
  form2: {
    width: "90%",
    left: 16,
    top: 10,
  },

  form3: {
    width: "90%",
    left: 16,
    top: 10,
  },

  form4: {
    width: "90%",
    left: 16,
    top: 10,
  },

  form5: {
    width: "90%",
    left: 16,
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    height: 50,
    width: 50,
    left: "40%",
    bottom: 25,
  },
  main: {
    height: "60%",
    top: "2%",
  },
  txt: {
    color: "red",
    fontWeight: "bold",
    top: 10,
    left: "2%",
    fontSize: 12,
  },
});
