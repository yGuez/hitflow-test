import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Missions from "./app/Pages/Missions";
import Home from "./app/Pages/Home";
import Login from "./app/Pages/Login";

import useCachedResources from "./hooks/useCachedResources";
import Informations from "./app/Pages/Informations";
import { colors } from "./app/Pages/styles";
import { useFonts } from "expo-font";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    MerriweatherSans: require("./assets/fonts/MerriweatherSans-VariableFont_wght.ttf"),
    MerriweatherSansBold: require("./assets/fonts/MerriweatherSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Missions"
              component={Missions}
              options={{
                title: "Mes missions",
                headerStyle: {
                  backgroundColor: "transparent",
                },
                headerTransparent: true,
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: colors.white,
                },
              }}
            />
            <Stack.Screen
              name="Informations"
              component={Informations}
              options={{
                title: "Mes information",
                headerStyle: {
                  backgroundColor: "transparent",
                },
                headerTransparent: true,
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: colors.white,
                },
              }}
            />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
