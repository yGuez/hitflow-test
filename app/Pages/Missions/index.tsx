import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MissionCard from "../../components/presentationnals/MissionCard";
import { spacing } from "../styles";

const missionsList = [
  {
    departure: {
      city: "Paris",
      postalCode: 75,
      date: "tot",
    },
    arrival: {
      city: "Lille",
      postalCode: 75,
      date: "tot",
    },
    price: 50,
    km: 217,
    costumer: "Client A",
    reference: 789078,
    options: ["Lavage", "W-Garage"],
    quotations: 1,
  },
  {
    departure: {
      city: "Paris",
      postalCode: 75,
      date: "tot",
    },
    arrival: {
      city: "Lille",
      postalCode: 75,
      date: "tot",
    },
    price: 30,
    km: 217,
    costumer: "Client A",
    reference: 789079,
    options: ["Lavage"],
    quotations: 6,
  },
];

const Missions = () => {
  return (
    <SafeAreaView>
      <View style={styles.page}>
        {missionsList.map((mission) => {
          return <MissionCard mission={mission} />;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    display: "flex",
    padding: spacing.s,
  },
});

export default Missions;
