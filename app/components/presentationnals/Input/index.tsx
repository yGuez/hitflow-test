import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors, font, spacing } from "../../../pages/styles";
import Text from "../Text";

export const Input = ({
  label,
  input,
  placeholder,
  error,
}: {
  label?: string;
  input: {
    value: string;
    onChangeText: (e: string | React.ChangeEvent<any>) => void;
    onBlur: (e: any) => void;
  };
  placeholder: string;
  error: string | false | undefined;
}) => {
  return (
    <View style={styles.container}>
      <Text bold style={styles.label}>
        {label}
      </Text>
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
