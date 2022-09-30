import { Image, View, Text, StyleSheet } from "react-native";
import { colors, font, spacing } from "../../../Pages/styles";

const Avatar = ({ imageUrl, name, email }: any) => {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} />
      <Text style={styles.name}> {name}</Text>
      <Text style={styles.email}> {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    name: {
      fontWeight: "bold",
      fontSize: font.size.xl,
      textAlign: "center",
    },
    email: {
      color: colors.blueMedium,
      fontSize: font.size.m,
    },
  });

export default Avatar;
