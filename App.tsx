import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Missions from "./app/pages/Missions";
import Home from "./app/pages/Home";
import Login from "./app/pages/Login";

import useCachedResources from "./hooks/useCachedResources";
import Informations from "./app/pages/Informations";
import { colors } from "./app/pages/styles";
import { useFonts } from "expo-font";
import BackButton from "./app/components/presentationnals/BackButton";
import Navivation from "./app/navigation";

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
      <Navivation />
    );
  }
}
