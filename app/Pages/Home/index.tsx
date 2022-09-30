import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({navigation}:any) => {
  return (
    <SafeAreaView>
      <View>
      <Text>Home Screen</Text>
      <Button
        title="Mes informations"
        onPress={() => navigation.navigate('Informations')}
      />
      <Button
        title="Mes missions"
        onPress={() => navigation.navigate('Missions')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
    </SafeAreaView>
  );
};

export default Home;
