import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
  email: Yup.string()
    .email("Enter a valid email")
});
