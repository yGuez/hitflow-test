import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, font, spacing } from "../../../Pages/styles";

const Button = ({ label, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: colors.blueDark,
    padding: spacing.m,
    borderRadius: 50,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: font.size.m,
    textAlign: "center",
  },
});

export default Button;
