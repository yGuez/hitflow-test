import React from "react";
import { View, StyleSheet } from "react-native";
import { spacing, font, colors } from "../../../../Pages/styles";
import FlagCircleEnd from "../../../icons/FlagCircleEnd";
import FlagCircleStart from "../../../icons/FlagCircleStart";
import Line from "../../../icons/Line";
import Text from "../../Text";

const Waypoints = ({departure, arrival}:any) => {
  return (
    <View>
      <View style={styles.waypoint}>
        <FlagCircleStart />
        <View style={{ marginLeft: spacing.s }}>
          <Text style={{ fontSize: font.size.l }}>
            {departure?.city} ({departure?.postalCode})
          </Text>
          <Text style={{ fontSize: font.size.s, color: colors.blueMedium }}>
            {departure?.date}
          </Text>
        </View>
      </View>
      <Line width={3} height={39} style={{ marginLeft: 32 }} />
      <View style={styles.waypoint}>
        <FlagCircleEnd />
        <View style={{ marginLeft: spacing.s }}>
          <Text style={{ fontSize: font.size.l }}>
            {arrival?.city} ({arrival?.postalCode})
          </Text>
          <Text style={{ fontSize: font.size.s, color: colors.blueMedium }}>
            {arrival?.date}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    waypoint: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
    },
  });
  

export default Waypoints;
