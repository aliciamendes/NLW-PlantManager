import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <Text style={style.title}>
          Gerencie {"\n"}
          suas plantas de {"\n"}
          forma fácil.
        </Text>

        <Image style={style.image} resizeMode="contain" source={wateringImg} />

        <Text style={style.text}>
          Não esqueca mais de regar suas plantas. Nós cuidamos de lembrar você!
        </Text>
        <TouchableOpacity style={style.button} activeOpacity={0.6}>
          <Feather name="chevron-right" style={style.iconButton} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 40,
    lineHeight: 40,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 15,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
    height: 55,
    paddingHorizontal: 15,
  },
  iconButton: {
    fontSize: 25,
    color: colors.white,
  },
});
