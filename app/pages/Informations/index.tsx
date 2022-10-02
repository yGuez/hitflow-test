import React, { useContext } from "react";
import { Formik } from "formik";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import Button from "../../components/presentationnals/Button";
import Input from "../../components/presentationnals/Input";
import { colors, spacing } from "../styles";
import { validationSchema } from "./validation";
import ScreenTemplate from "../../components/presentationnals/ScreenTemplate";
import { AppContext } from "../../context/AppContext";
import { Types } from "../../models/reducerTypes";

const Informations = ({ navigation }: any) => {
  const { state, dispatch } = useContext(AppContext);
  const onSubmitHandler = (values: any) => {
    dispatch({ type: Types.Update, payload: values });
    navigation.goBack();
  };
  return (
    <ScreenTemplate headerPadding={spacing.s}>
      <SafeAreaView>
        <View style={styles.page}>
          <Formik
            initialValues={{
              firstname: state.user.firstname,
              lastname: state.user.lastname,
              email: state.user.email,
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
              <>
                <View style={styles.form}>
                  <Input
                    label="Prénom"
                    input={{
                      value: values.firstname,
                      onChangeText: handleChange("firstname"),
                      onBlur: handleBlur("firstname"),
                    }}
                    placeholder="John"
                  />
                  <Input
                    label="Nom"
                    input={{
                      value: values.lastname,
                      onChangeText: handleChange("lastname"),
                      onBlur: handleBlur("lastname"),
                    }}
                    placeholder="Smith"
                  />
                  <Input
                    label="Email"
                    input={{
                      value: values.email,
                      onChangeText: handleChange("email"),
                      onBlur: handleBlur("email"),
                    }}
                    placeholder="john.smith@gmail.com"
                    error={touched.email && errors.email}
                  />
                </View>
                <View style={styles.button}>
                  <Button onPress={handleSubmit} label="Enregistrer" />
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScreenTemplate>
  );
};
const styles = StyleSheet.create({
  page: {
    display: "flex",
    height: "100%",
    backgroundColor: colors.blueLight,
    padding: spacing.s,
  },
  form: {
    flex: 1,
    justifyContent: "flex-start",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Informations;
