import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters "),
});
