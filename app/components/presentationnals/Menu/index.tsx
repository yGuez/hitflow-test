import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors, spacing, font } from "../../../Pages/styles";
import Arrow from "../../icons/Arrow";

const Menu = ({ navigation, items }: any) => {
  return (
    <View style={styles.container}>
      {items.map((item: any) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate(item.url)}
          key={item.url}
        >
          <Text style={styles.text}>{item.label}</Text>
          <Arrow width={20} height={20} color={colors.blueDark}/>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingLeft: spacing.l
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: colors.blueMedium,
    paddingVertical: spacing.l ,
    paddingRight: spacing.l,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: "bold",
    fontSize: font.size.m,
    textAlign: "left",
  },
});

export default Menu;
