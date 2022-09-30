import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { colors, font, spacing } from "../../../Pages/styles";

export const Input = ({ label, input, placeholder, error }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...input} placeholder={placeholder} style={styles.input} />
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.s,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.blueMedium,
    borderRadius: spacing.xs,
    padding: spacing.s,
    backgroundColor: colors.white,
  },
  label: {
    fontWeight: "bold",
    marginBottom: spacing.xs,
    fontSize: font.size.m,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "#ff7675",
  },
});

export default Input;
