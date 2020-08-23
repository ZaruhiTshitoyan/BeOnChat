import {
  validateEmail,
  validatePassword,
  validateUsername
} from "@/helpers/validationRules";

const checkValidType = (values) => {
  const errors = {};

  if (!values.email  || !validateEmail(values.email)) {
    errors.email = "Email address invalid";
  }
  if (!!values.password || !validatePassword(!values.password.value)) {
    errors.password = "Password is incorrect";
  }

  return errors;
};

const isFormValid = (values) => {
  const isNotValid = checkValidType(values);
  return isNotValid;
};
  
export default isFormValid;
