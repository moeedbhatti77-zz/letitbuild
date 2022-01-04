import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { Component } from "react";
import {
  Button,
  View,
  Text,
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
  Card,
  CardItem,
  Icon,
  Right,
} from "native-base";
import { color } from "react-native-reanimated";
import { TouchableHighlight } from "react-native";

const ACCOUNT = (props) => {
  // const db = route.params.mail;
  // Alert.alert(db);

  return (
    <View style={styles.Container}>
      <View style={{ top: 20 }}>
        <Text style={{ color: "#cd5c5c", fontWeight: "bold", fontSize: 20 }}>
          {" "}
          ACTIVITES
        </Text>
      </View>

      <Card style={styles.Card}>
        <TouchableOpacity onPress={() => props.navigation.navigate("CROSSFIT")}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jvc3NmaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            }}
            style={styles.image}
          >
            <Text
              style={{
                top: "70%",
                fontSize: 25,
                color: "#fff",
                fontWeight: "bold",
                left: 8,
              }}
            >
              {" "}
              CROSS FIT{" "}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </Card>
      <Card style={styles.card1}>
        <TouchableOpacity onPress={() => props.navigation.navigate("GYM")}>
          <ImageBackground
            source={{
              uri: "https://titaniumfitnesslb.com/img/services/GymandFitness.jpg",
            }}
            style={styles.image}
          >
            <Text
              style={{
                top: "73%",
                fontSize: 23,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {" "}
              GYM{" "}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </Card>
      <Card style={styles.card2}>
        <TouchableHighlight
          onPress={() => props.navigation.navigate("RUNNING")}
        >
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/736x/1d/83/d3/1d83d3a8726d888b8f67a423e94d546a.jpg",
            }}
            style={styles.image}
          >
            <Text
              style={{
                top: "73%",
                fontSize: 23,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {" "}
              RUNNING{" "}
            </Text>
          </ImageBackground>
        </TouchableHighlight>
      </Card>
      <Card style={styles.card3}>
        <TouchableOpacity onPress={() => props.navigation.navigate("YOGA")}>
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/236x/a5/cc/8d/a5cc8d04bc903cc4472d9e55fc3d44ba.jpg",
            }}
            style={styles.image}
          >
            <Text
              style={{
                top: "86%",
                fontSize: 23,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {" "}
              YOGA{" "}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </Card>
    </View>
  );
};
export default ACCOUNT;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Card: {
    width: "90%",
    height: "28%",
    left: "4%",
    top: 30,
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
    bottom: 30,
  },
  card1: {
    backgroundColor: "#fff",
    top: "5%",
    width: "40%",
    height: "25%",
    left: "5%",
  },
  card2: {
    backgroundColor: "#fff",
    top: "6%",
    width: "40%",
    height: "25%",
    left: "5%",
  },
  card3: {
    backgroundColor: "#fff",
    bottom: "48%",
    width: "40%",
    height: "52%",
    left: "53%",
  },
});
