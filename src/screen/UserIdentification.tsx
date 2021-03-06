import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
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

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [nameUser, setNameUser] = useState<String>();

  const navigation = useNavigation();

  function handleWithSubmit() {
    navigation.navigate("Confirmation");
  }
  function handleWithInputBlur() {
    setIsFocused(false);
    setIsFilled(!!nameUser);
  }
  function handleWithInputFocus() {
    setIsFocused(true);
  }

  function handleWithInputChange(value: string) {
    setIsFilled(!!value);
    setNameUser(value);
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
            <View style={style.form}>
              <View style={style.header}>
                <Text style={style.emoji}>{isFilled ? "😁" : "🙂"}</Text>
                <Text style={style.text}>
                  Como podemos{"\n"}
                  chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  style.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite seu nome"
                onBlur={handleWithInputBlur}
                onFocus={handleWithInputFocus}
                onChangeText={handleWithInputChange}
              />

              <View style={style.footer}>
                <Button title="Confirmar" onPress={handleWithSubmit} />
              </View>
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
  content: { flex: 1, width: "100%" },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    width: "100%",
  },
  header: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 50,
  },
  text: {
    fontSize: 26,
    lineHeight: 32,
    textAlign: "center",
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 20,
    padding: 10,
    textAlign: "center",
  },
  footer: { marginTop: 50, width: "100%", paddingHorizontal: 20 },
});
