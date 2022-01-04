import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  flex,
  SafeAreaView,
  ScrollView,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  Right,
  Item,
  Label,
  Input,
} from "native-base";
const items = [
  {
    NUM: "BICEPS",
    NAME: "CHEST",
    MOBILENUMBER: "Meccan-verses7",
    arabic: "الفاتحة‎",
    imageurl:
      "data:image/jpeg;base64,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",
    imageurl1:
      "https://images-platform.99static.com/vQ2TBm0HMTQjUkS4x2bjoD-yJ_k=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/125/125256/attachment_125256320",
  },
  {
    NUM: "BACK",
    NAME: "TRICEPS",
    MOBILENUMBER: "Medinan-verses:286 ",
    arabic: "البقرة",
    imageurl: "",

    imageurl1:
      "https://fsa.zobj.net/crop.php?r=nXVt2VzIX48IF49S15FFk5Bt5RkEYbznf69uLH7B-SBdl7hhDkJo74S5Z23YtH06z0xp4H2AsDwrUMoxIQtJI_aU99ypCUtKq0XzzoyFmw0GUH7fTyIsRFJP3t0eue0-FXnXFCESy35FrP-ewhN1aFzXOBWPEg8iHZyL0cq4QW4Il_ZFlgCUJ8H_DtM",
  },
  {
    NUM: "SHOULDER",
    NAME: "WINGS",
    MOBILENUMBER: "Medinan-Verses:200",
    arabic: "آل عمران‎",
    imageurl: "https://static3.bigstockphoto.com/6/3/1/large1500/136423265.jpg",
    imageurl1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdGfivu4GApvUsAIPkjFQqhCCkFc9y35PZKgVnLxVdcS8d4ul-oFrJpGY94YVUC0nyJ0&usqp=CAU",
  },
  {
    NUM: "ABS",
    NAME: "LEG",
    MOBILENUMBER: "Mednian-verses:176",
    arabic: "ٱلنساء‎",
    imageurl: "https://static1.bigstockphoto.com/1/3/3/large1500/331877956.jpg",
    imageurl1:
      "https://tmoniquestephens.com/wp-content/uploads/2015/06/bigstock-bodybuilder-posing-81189725.jpg",
  },
];

const ACtivity = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Header style={{ backgroundColor: "green", marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            top: 10,
            left: 150,
          }}
        >
          <Icon style={{ color: "#fff" }} name="menu" />
        </TouchableOpacity>
      </Header>
      <ModalDropdown
        style={{ bottom: 50, left: 10, width: 30 }}
        defaultValue="⋮ "
        options={[
          " 💙 VIEW WISH LIST ",
          " 👤 PERSON ",
          " ⬇️⬆️ ORDER",
          " 👤 LOGOUT",
        ]}
        dropdownStyle={{
          width: "50%",
          height: "30%",
          marginRight: 20,
        }}
        dropdownTextStyle={{ fontWeight: "bold", fontSize: 15 }}
        textStyle={{ fontWeight: "bold", fontSize: 28, color: "#fff" }}
      ></ModalDropdown>

      <StatusBar style="light" />
      <View style={{ bottom: 30 }}>
        <Item regular style={{ width: "94%", left: 10 }}>
          <Label>
            <Icon name="search" />
          </Label>
          <Input
            placeholder="Product NAME"
            onChangeText={(emaial) => setEmail(emaial)}
          />
        </Item>
      </View>

      <ImageBackground
        source={{
          uri: "https://image.shutterstock.com/image-photo/brilliant-promotion-sale-poster-banner-260nw-636362552.jpg",
        }}
        style={{
          width: "94%",
          height: "60%",
          left: 25,
        }}
      ></ImageBackground>
      <View style={{ bottom: "20%" }}>
        <Text
          style={{ color: "green", fontSize: 20, fontWeight: "bold", left: 20 }}
        >
          PRODUCTS
        </Text>
      </View>
      <FlatList
        style={{ bottom: "17%", height: 40 }}
        contentContainerStyle={{ alignSelf: "flex-start" }}
        numColumns={items.length / 2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", bottom: 15 }}>
            <Card style={styles.Card}>
              <Image
                source={{
                  uri: item.imageurl,
                }}
                style={styles.image}
              ></Image>
            </Card>
            <View style={{ left: 5 }}>
              <Card style={styles.Card}>
                <Image
                  source={{
                    uri: item.imageurl1,
                  }}
                  style={styles.image}
                ></Image>
              </Card>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default ACtivity;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Card: {
    width: 170,
    height: 90,

    top: 20,
    borderRadius: 10,
    left: 3,
  },
  image: {
    height: "100%",
    width: "100%",
    // left: 3,

    borderRadius: 10,
  },
  image1: {
    height: 50,
    width: 50,
    left: "80%",
    bottom: 30,
  },
});
