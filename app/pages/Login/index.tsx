import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { Formik } from "formik";
import { validationSchema } from "./validation";

import Input from "../../components/presentationnals/Input";
import Button from "../../components/presentationnals/Button";
import { colors, font, spacing } from "../styles";
import ScreenTemplate from "../../components/presentationnals/ScreenTemplate";
import Text from "../../components/presentationnals/Text";
import { AppContext } from "../../context/AppContext";
import { Types } from "../../models/reducerTypes";

const RegisterForm = () => {
  const { dispatch } = useContext(AppContext);

  const onSubmitHandler = (values: { password: string; email: string }) => {
    if (values.password === "password") {
      dispatch({ type: Types.Log, payload: true });
    }
  };

  return (
    <>
      <ScreenTemplate headerPadding={spacing.s}>
        <SafeAreaView>
          <View style={styles.page}>
            <View>
              <Image
                style={{ width: 300, height: 50, marginBottom: spacing.l }}
                source={require("../../../assets/hiflowPartner.png")}
              />
              <Text bold style={styles.title}>
                Identifiez-vous pour accéder à vos missions
              </Text>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  onSubmitHandler(values);
                }}
                validationSchema={validationSchema}
              >
                {({
                  handleChange,
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  handleBlur,
                }) => (
                  <ScrollView>
                    <Input
                      input={{
                        value: values.email,
                        onChangeText: handleChange("email"),
                        onBlur: handleBlur("email"),
                      }}
                      placeholder="Email"
                      error={touched.email && errors.email}
                    />

                    <Input
                      input={{
                        value: values.password,
                        onChangeText: handleChange("password"),
                        onBlur: handleBlur("password"),
                      }}
                      placeholder="Password"
                      error={touched.password && errors.password}
                    />

                    <Button onPress={handleSubmit} label="S'identifier" />
                  </ScrollView>
                )}
              </Formik>
            </View>
          </View>
        </SafeAreaView>
      </ScreenTemplate>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    display: "flex",
    justifyContent: "center",
    padding: spacing.l,
    height: "100%",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: font.size.l,
    color: colors.white,
    textAlign: "center",
    paddingHorizontal: spacing.l,
  },
});

export default RegisterForm;
