import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../../components/presentationnals/Avatar";
import Menu from "../../components/presentationnals/Menu";
import ScreenTemplate from "../../components/presentationnals/ScreenTemplate";
import { colors, spacing } from "../styles";

const menuItems = [
  { label: "Mes informations", url: "Informations" },
  { label: "Mes missions", url: "Missions" },
];

const Home = ({ navigation }: any) => {
  return (
    <ScreenTemplate headerPadding={spacing.xs}>
      <SafeAreaView>
        <View style={styles.page}>
          <Avatar
            name="totot"
            email="totottotot"
            imageUrl={require("../../../assets/driver.png")}
          />
          <Menu navigation={navigation} items={menuItems} />
        </View>
      </SafeAreaView>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: colors.blueLight,
    paddingTop: spacing.l
  },
});


export default Home;
