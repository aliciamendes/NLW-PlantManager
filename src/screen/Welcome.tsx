import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

export function Welcome() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <Text style={style.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil.
      </Text>

      <Image style={style.image} resizeMode="contain" source={wateringImg} />

      <Text style={style.text}>
        Não esqueca mais de regar suas plantas. Nós cuidamos de lembrar você!
      </Text>
      <TouchableOpacity style={style.button} activeOpacity={0.6}>
        <Text style={style.buttonTxt}>{">"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 40,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 15,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
    height: 55,
    paddingHorizontal: 20,
  },
  buttonTxt: {
    fontSize: 25,
    color: colors.white,
  },
});
