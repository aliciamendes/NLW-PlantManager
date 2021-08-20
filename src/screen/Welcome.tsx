import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import Button from "./components/Button";

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(true);
  }

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
      <Button title=">" onPress={handleVisibility} />
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
    width: 290,
    height: 285,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 15,
    color: colors.heading,
  },
});
