import React from "react";
import { Formik } from "formik";
import {
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import Button from "../../components/presentationnals/Button";
import Input from "../../components/presentationnals/Input";
import { colors, spacing } from "../styles";
import { validationSchema } from "./validation";

const Informations = ({ navigation }: any) => {
  const onSubmitHandler = (values: any) => {
  };
  return (
    <SafeAreaView>
      <View style={styles.page}>
        <Formik
          initialValues={{
            firstname: "john",
            lastname: "toto",
            email: "toto@mail.com",
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
