import * as yup from "yup";

const yupSchema = yup.object().shape({
  firstName: yup.string().required("First name is required, fool"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive("Make it positive, fool").integer(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

export default yupSchema;
