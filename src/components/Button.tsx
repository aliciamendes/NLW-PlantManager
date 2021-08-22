import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Button() {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.text}>Confirmar</Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    height: 55,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  },
});
