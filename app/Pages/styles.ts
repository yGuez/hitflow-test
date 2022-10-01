import { StyleSheet, ViewStyle, Platform } from "react-native";
import Constants from "expo-constants";

export const colors = {
  blueGradient: "#3498db",
  blueLight: "#F4F6FB",
  blueMedium: "#C8D0EB",
  blueDark: "#1C2D6A",
  grey: "#7C879D",
  white: "#FFFFFF"
};

const baseSpacing = 5;
export const spacing = {
  xs : baseSpacing,
  /** 15 */
  s: baseSpacing * 3,
  /** 20 */
  m: baseSpacing * 4,
  /** 30 */
  l: baseSpacing * 6,
};

export const font = {
  family: {
    // overpass: "Overpass, sans-serif",
    // mulish: "Mulish, sans-serif",
  },
  letterSpacing: {
    default: 0,
    title: 1,
  },
  size: {
    s: 12,
    m: 15,
    l: 17,
    xl: 25,
  },
};

export const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: colors.blueGradient,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor:
      Platform.OS === "ios" ? colors.blueLight : colors.blueGradient,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blueGradient,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  content: {
    padding: 20,
    backgroundColor: colors.blueLight,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    color: "#7d7e79",
    fontSize: 16,
    lineHeight: 30,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
 
  button: {
    marginTop: 20,
    backgroundColor: "#2980b9",
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
