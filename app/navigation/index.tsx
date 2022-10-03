import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BackButton from "../components/presentationnals/BackButton";
import Home from "../pages/Home";
import Informations from "../pages/Informations";
import Missions from "../pages/Missions";
import Login from "../pages/Login";
import { colors } from "../pages/styles";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navivation = () => {
  const Stack = createNativeStackNavigator();
  const { state } = useContext(AppContext);
  if (!state.isLogged) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  if (state.isLogged) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Mon compte",
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTransparent: true,
              headerTitleStyle: {
                color: colors.white,
                fontFamily: "MerriweatherSansBold",
              },
            }}
          />
          <Stack.Screen
            name="Missions"
            component={Missions}
            options={({ navigation }) => ({
              title: "Mes missions",
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTransparent: true,
              headerTitleStyle: {
                fontFamily: "MerriweatherSansBold",
                color: colors.white,
              },
              headerLeft: () => (
                <BackButton onPress={() => navigation.goBack(null)} />
              ),
            })}
          />
          <Stack.Screen
            name="Informations"
            component={Informations}
            options={({ navigation }) => ({
              title: "Mes informations",
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTransparent: true,
              headerTitleStyle: {
                fontFamily: "MerriweatherSansBold",
                color: colors.white,
              },
              headerLeft: () => (
                <BackButton onPress={() => navigation.goBack(null)} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navivation;
