import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../styles/colors";
import perfil from "../assets/perfil.png";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.subtitle}>Usuário</Text>
      </View>
      <Image source={perfil} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getStatusBarHeight(),
  },
  content: {},
  title: {
    fontFamily: fonts.text,
    fontSize: 30,
    color: colors.heading,
  },
  subtitle: {
    fontFamily: fonts.heading,
    fontSize: 30,
    color: colors.heading,
    lineHeight: 35,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 33,
  },
});
