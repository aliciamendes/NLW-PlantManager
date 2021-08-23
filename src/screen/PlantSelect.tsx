import React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import EnviromentButton from "../components/EnvironmentButton";
import { Header } from "../components/Header";
import api from "../service/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function PlantSelect() {
  
  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get("plants_environments");
    }
    fetchEnvironment();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual abriente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => <EnviromentButton title="Cozinha" />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 20,
  },
  subtitle: {
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 16,
    lineHeight: 20,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
