import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import { ReactNode } from "react";
import { View } from "react-native";

const ScreenTemplate = ({
  children,
  headerPadding,
}: {
  children: ReactNode;
  headerPadding: number;
}) => {
  const headerHeight = useHeaderHeight();

  return (
    <LinearGradient
      colors={["#4569EA", "#04D5E1"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
    >
     {children}
    </LinearGradient>
  );
};

export default ScreenTemplate;
