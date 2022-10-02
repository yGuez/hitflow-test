import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BackButton from "../components/presentationnals/BackButton";
import Home from "../pages/Home";
import Informations from "../pages/Informations";
import Missions from "../pages/Missions";
import { colors } from "../pages/styles";

const Navivation = ({}) => {
  const Stack = createNativeStackNavigator();
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
          options={({ navigation, route }) => ({
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
            title: "Mes information",
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
};

export default Navivation;
