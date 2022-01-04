import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import login from "./SCREENS/Login";
import Register from "./SCREENS/Register";

import console, { Fetch } from "./SCREENS/console";
import Registar from "./SCREENS/Register";
import PACKAGE from "./SCREENS/PACKAGE";
import PAYMENT from "./SCREENS/PAYMENT";
import Account from "./SCREENS/ACCOUNT";
import Activity from "./SCREENS/ACtivity";
import Home from "./SCREENS/HOME";
import PACKAGEGOOGLE from "./SCREENS/PACKAGEGOOGLE";
import PAYMETGOOGLE from "./SCREENS/PAYMENTGOOGLE";
import Firebase from "./SCREENS/Firebase";
import RUNNING from "./SCREENS/Running";
import GYM from "./SCREENS/GYM";

import CROSSFIT from "./SCREENS/CROSSFIT";
import YOGA from "./SCREENS/YOGA";
import Guest from "./SCREENS/GUEST";
import FINAL from "./SCREENS/FINAL";
import BYCEPS from "./SCREENS/BYCEPS";

const Drawer = createDrawerNavigator();
const drawer = ({ route }) => {
  return (
    <Drawer.Navigator
      initialRouteName="console"
      drawerContent={(props) => <Fetch {...props} />}
    >
      <Drawer.Screen name="console" component={console} />
      <Drawer.Screen name="Fetch" component={Fetch} />
      <Drawer.Screen name="FINAL" component={FINAL} />
      <Drawer.Screen name="PACKAGEGOOGLE" component={PACKAGEGOOGLE} />
      <Drawer.Screen name="PAYMENTGOOGLE" component={PAYMETGOOGLE} />

      <Drawer.Screen name="login" component={login} />
    </Drawer.Navigator>
  );
};
const FIN = ({ route }) => {
  return (
    <Drawer.Navigator
      initialRouteName="FINAL"
      drawerContent={(props) => <Fetch {...props} />}
    >
      <Drawer.Screen name="console" component={console} />
      <Drawer.Screen name="Fetch" component={Fetch} />
      <Drawer.Screen name="FINAL" component={FINAL} />
      <Drawer.Screen name="PACKAGEGOOGLE" component={PACKAGEGOOGLE} />
      <Drawer.Screen name="PAYMENTGOOGLE" component={PAYMETGOOGLE} />

      <Drawer.Screen name="login" component={login} />
    </Drawer.Navigator>
  );
};

const App = ({}) => {
  LogBox.ignoreAllLogs();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Registar" component={Registar} />
        <Stack.Screen name="PACKAGE" component={PACKAGE} />
        <Stack.Screen name="PAYMENT" component={PAYMENT} />
        <Stack.Screen name="PACKAGEGOOGLE" component={PACKAGEGOOGLE} />
        <Stack.Screen name="PAYMENTGOOGLE" component={PAYMETGOOGLE} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="FINAL" component={FIN} />

        <Stack.Screen name="Firebase" component={Firebase} />
        <Stack.Screen name="RUNNING" component={RUNNING} />
        <Stack.Screen name="GYM" component={GYM} />
        <Stack.Screen name="CROSSFIT" component={CROSSFIT} />
        <Stack.Screen name="YOGA" component={YOGA} />

        <Stack.Screen name="console" component={drawer} />
        <Stack.Screen name="GUEST" component={Guest} />
        <Stack.Screen name="BYCEPS" component={BYCEPS} />

        {/* <Stack.Screen name="Signup" component={Signup} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
});
