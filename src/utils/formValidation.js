import {
  validateEmail,
  validatePassword,
  validateUsername
} from "@/helpers/validationRules";

const checkValidType = (values) => {
  const errors = {};

  if (!values.email || !validateEmail(values.email)) {
    errors.email = "Email address invalid";
  }
  if (!values.password || !validatePassword(values.password)) {
    errors.password = "Password is incorrect";
  }

  return errors;
};

const isFormValid = (values) => {
  const checkedFields = checkValidType(values);
  return checkedFields;
};
  
export default isFormValid;
