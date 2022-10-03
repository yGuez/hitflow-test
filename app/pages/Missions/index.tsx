import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MissionCard from "../../components/presentationnals/MissionCard";
import ScreenTemplate from "../../components/presentationnals/ScreenTemplate";
import { OptionsType } from "../../utils/types";
import { spacing } from "../styles";

const missionsList = [
  {
    departure: {
      city: "Paris",
      postalCode: 75,
      date: new Date(),
    },
    arrival: {
      city: "Lille",
      postalCode: 75,
      date: new Date(),
    },
    price: 50,
    km: 217,
    costumer: "Client A",
    reference: 789078,
    options: [OptionsType.GARAGE],
    quotations: 1,
  },
  {
    departure: {
      city: "Paris",
      postalCode: 75,
      date: new Date(),
    },
    arrival: {
      city: "Lille",
      postalCode: 75,
      date: new Date(),
    },
    price: 30,
    km: 217,
    costumer: "Client A",
    reference: 789079,
    options: [OptionsType.GARAGE, OptionsType.WASHING],
    quotations: 6,
  },
  {
    departure: {
      city: "Paris",
      postalCode: 75,
      date: new Date(),
    },
    arrival: {
      city: "Lille",
      postalCode: 75,
      date: new Date(),
    },
    price: 30,
    km: 217,
    costumer: "Client A",
    reference: 789079,
    options: [OptionsType.GARAGE],
    quotations: 6,
  },
];

const Missions = () => {
  return (
    <>
      <ScreenTemplate headerPadding={spacing.xs}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.page}>
              {missionsList.map((mission, i) => {
                return (
                  <MissionCard
                    mission={mission}
                    key={`${mission.reference}-${i}`}
                  />
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      </ScreenTemplate>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    display: "flex",
    padding: spacing.s,
    height: "100%",
    backgroundColor: "transparent",
  },
});

export default Missions;
