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
} from "react-native";
import { Item, Input, Label, Icon, Card, Button } from "native-base";
import EXPO from "expo";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight_Italic,
  Raleway_600SemiBold_Italic,
  Raleway_500Medium_Italic,
  Raleway_700Bold_Italic,
  Raleway_800ExtraBold_Italic,
} from "@expo-google-fonts/raleway";

import firebase from "firebase";
import { firebaseConfig } from "../COMPONENTS/firebaseconfig";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import consol from "./console";

export default function login({ navigation }) {
  useEffect(() => {
    setTestDeviceIDAsync("Andriod");
  }, [300]);

  const [emaial, setEmail] = useState("");
  const [pasword, setpasword] = useState("");
  const [isecurity, setisecuirty] = useState(true);
  const [emailerror, setEmailerror] = useState("");
  const [pasworderror, setpasworderror] = useState("");
  let [fontloaded, error] = useFonts({
    Raleway_200ExtraLight_Italic,
    Raleway_600SemiBold_Italic,
    Raleway_500Medium_Italic,
    Raleway_700Bold_Italic,
    Raleway_800ExtraBold_Italic,
  });
  if (!fontloaded) {
    return <AppLoading />;
  }

  const initRewardAds = async () => {
    // Display a rewarded ad
    await AdMobRewarded.setAdUnitID("ca-app-pub-2032352638781616/3716352060");
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };

  async function signInWithGoogleAsync() {
    try {
      const { type, user } = await Google.logInAsync({
        behavior: "web",
        androidClientId:
          "995195195630-4kqk52dm1im02t7du3ttkaddirn93553.apps.googleusercontent.com",
        iosClientId:
          "995195195630-rgsbsrf3adv8e3b62153o19u961r4kpi.apps.googleusercontent.com",
        androidStandaloneAppClientId:
          "995195195630-jr6bmjn9shq7f93gk99hcidnjovqqhud.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (type === "success") {
        setTimeout(() => navigation.navigate("PACKAGEGOOGLE", { user }, 1000));
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      Alert.alert(error.toString());
    }
  }

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: "496091891642136",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API

        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        const { email, name } = type;

        setTimeout(() =>
          navigation.navigate("console", { em: email, nam: name }, 1000)
        );
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  function saveItem(emaial, pasword) {
    firebase
      .auth()
      .signInWithEmailAndPassword(emaial, pasword)
      .then(
        () => {
          navigation.navigate("console");
        },
        (error) => {
          setEmailerror(error.message);
        }
      );
    setEmail("");
    setpasword("");
  }
  function GUESTITEM() {
    firebase
      .auth()
      .signInAnonymously()
      .then(
        () => {
          Alert.alert("GUEST LOGIN ");

          navigation.navigate("BYCEPS");
        },
        (error) => {
          Alert.alert(error);
        }
      );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        }}
        style={{
          width: "100%",
          height: "60%",
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
          <Text style={styles.text}> LOGIN </Text>
          <View style={{ top: 20 }}>
            <Item regular style={{ width: "90%", left: 16 }}>
              <Label>
                <Icon name="person" />
              </Label>
              <Input
                placeholder="ENTER EMAIL"
                onChangeText={(emaial) => setEmail(emaial)}
              />
            </Item>
            <Text style={styles.txt}> {emailerror} </Text>
            <Item regular style={{ top: 20, width: "90%", left: 16 }}>
              <Label>
                <TouchableOpacity
                  onPress={() => {
                    setisecuirty((prev) => !prev);
                  }}
                >
                  <Icon name="eye" />
                </TouchableOpacity>
              </Label>

              <Input
                style={{}}
                secureTextEntry={isecurity}
                placeholder="ENTER PASSWORD"
                onChangeText={(pasword) => setpasword(pasword)}
              />
            </Item>
            <Text style={styles.tx}> {emailerror} </Text>
            <View style={{ top: 30, flexDirection: "row" }}>
              <Button
                style={{
                  left: 16,
                  width: "40%",
                  backgroundColor: "#48d1cc",
                }}
                block
                onPress={() => {
                  saveItem(emaial, pasword);
                }}
              >
                <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
              </Button>
              <Button
                style={{
                  left: 50,
                  width: "40%",
                  backgroundColor: "#48d1cc",
                }}
                block
                onPress={() => {
                  GUESTITEM();
                }}
              >
                <Text style={{ fontWeight: "bold" }}>GUEST LOGIN </Text>
              </Button>
            </View>

            <View style={{ top: 50, left: 80 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Registar")}>
                <Text style={{ color: "#48d1cc" }}>
                  {" "}
                  New User? Register Now{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
      <View style={{ top: 52 }}>
        <Text
          style={{
            left: 132,
            fontFamily: "Raleway_200ExtraLight_Italic",
          }}
        >
          Or Login With
        </Text>
      </View>
      <View style={{ top: 90, width: "30%", left: 60 }}>
        <TouchableOpacity onPress={() => signInWithGoogleAsync()}>
          <Image
            source={{
              uri: "https://cdn.dribbble.com/users/147311/screenshots/2225059/g__new_logo.png",
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: "20%", left: "50%", top: 30 }}>
        <TouchableOpacity onPress={() => logIn()}>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R08a656b590a0f3f08e877ed91d6f1cb6?rik=zdz7lSYGneyy5w&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f02%2fcircle-facebook-logo-icon_107466.png&ehk=ZqlLaOeoNoa%2fYYPIUwqksVlN7PLG8etFrH73hVzmh60%3d&risl=&pid=ImgRaw",
            }}
            style={styles.image1}
          />
        </TouchableOpacity>
      </View>
      <View style={{ top: 20 }}>
        <AdMobBanner
          style={{}}
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2032352638781616/6534087095"
          servePersonalizedAds
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    left: 60,
  },
  image1: {
    height: 70,
    width: 70,
  },
});
