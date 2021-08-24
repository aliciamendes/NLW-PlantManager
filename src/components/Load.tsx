import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import animation from "../assets/plant-animation.json";

export function Load() {
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        source={animation}
        autoPlay
        loop
        style={styles.load}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  load: {
    backgroundColor: "transparent",
    width: 200,
    height: 200,
  },
});
