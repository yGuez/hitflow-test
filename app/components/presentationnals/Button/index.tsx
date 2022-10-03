import React, { FormEvent } from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, font, spacing } from "../../../pages/styles";

const Button = ({
  label,
  onPress,
  disabled
}: {
  label: string;
  disabled: boolean,
  onPress: () => any
}) => {
  return (
    <TouchableOpacity style={[styles.button, disabled && styles.disabled]} onPress={onPress} disabled={disabled}>
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
  disabled: {
    backgroundColor: colors.blueDark,
    opacity: 0.7
  },
});

export default Button;
