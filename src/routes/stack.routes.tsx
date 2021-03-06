import React from "react";
import colors from "../styles/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screen/Welcome";
import { UserIdentification } from "../screen/UserIdentification";
import { Confirmation } from "../screen/Confirmation";
import PlantSelect from "../screen/PlantSelect";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />

    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen name="Confirmation" component={Confirmation} />

    <stackRoutes.Screen name="PlantSelect" component={PlantSelect} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
