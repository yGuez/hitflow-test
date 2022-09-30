import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Missions from "./app/Pages/Missions";
import Home from "./app/Pages/Home";
import Login from "./app/Pages/Login";

import useCachedResources from "./hooks/useCachedResources";
import Informations from "./app/Pages/Informations";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const Stack = createNativeStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Missions" component={Missions} />
          <Stack.Screen name="Informations" component={Informations} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
