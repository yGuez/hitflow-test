import { Image, View, StyleSheet } from "react-native";
import { colors, font } from "../../../Pages/styles";
import Text from "../Text";

const Avatar = ({ imageUrl, name, email }: any) => {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} />
      <Text bold style={styles.name}>
        {name}
      </Text>
      <Text style={styles.email}> {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: font.size.xl,
    textAlign: "center",
  },
  email: {
    color: colors.blueMedium,
    fontSize: font.size.m,
  },
});

export default Avatar;
