import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Veuillez entrer une adresse email valide")
    .required("Veuillez entrer une adresse email"),
  password: Yup.string()
    .required("Veuillez entrer un mot de passe")
});
