import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../../components/presentationnals/Avatar";
import Menu from "../../components/presentationnals/Menu";

const menuItems = [
  { label: "Mes informations", url: "Informations" },
  { label: "Mes missions", url: "Missions" },
];

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View>
        <Avatar name="totot" email="totottotot" imageUrl={require('../../../assets/driver.png')}/>
        <Menu navigation={navigation} items={menuItems} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
