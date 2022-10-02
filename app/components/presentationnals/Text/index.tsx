import { Text as NativeText, StyleSheet } from "react-native";

const Text = ({ children, bold, style, ...props }: any) => {
  return (
    <NativeText style={[styles.text, bold && styles.bold, style]} {...props}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "MerriweatherSans",
  },
  bold : {
    fontFamily: "MerriweatherSansBold",
  }
});

export default Text;
