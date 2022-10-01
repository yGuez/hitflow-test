import { View, StyleSheet, Text } from "react-native";
import { colors, spacing } from "../../../../Pages/styles";

export enum badgeColors {
    blueDark = "#1C2D6A",
    blueMedium = "#C8D0EB"
}

const Badge = ({
  text,
  color,
}: {
  text: string;
  color: badgeColors;
}) => {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <Text
        style={{ color: color === badgeColors.blueDark ? colors.white : colors.blueDark, fontWeight : 'bold' }}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems:'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.s,
    borderRadius: 3,
  },
});

export default Badge;
