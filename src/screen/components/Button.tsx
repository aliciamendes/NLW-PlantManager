import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import colors from "../../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={style.button} activeOpacity={0.6} {...rest}>
      <Text style={style.buttonTxt}>{title}</Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
    height: 55,
    paddingHorizontal: 10,
  },
  buttonTxt: {
    fontSize: 20,
    color: colors.white,
  },
});
