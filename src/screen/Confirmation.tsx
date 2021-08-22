import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/core";

export function Confirmation() {
  const navigation = useNavigation();

  function handleWithStart() {
    navigation.navigate("");
  }
  function handleWithFeedback() {
    Keyboard.dismiss();
  }
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={handleWithFeedback}>
          <View style={style.content}>
            <Text style={style.emoji}>🥰</Text>
            <Text style={style.title}>Prontinho</Text>
            <Text style={style.subtitle}>
              Vamos começar a cuidar das suas plantinhas com muito cuidado
            </Text>
            <View style={style.footer}>
              <Button title="Começar" onPress={handleWithStart} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emoji: { fontSize: 60 },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 10,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingHorizontal: 10,
    color: colors.heading,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
