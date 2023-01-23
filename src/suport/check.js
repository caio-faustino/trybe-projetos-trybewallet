const checkForEmptyFields = (...fields) => {
  const isEmpty = fields.some((field) => field === '');
  return isEmpty;
};

const validateDisabledButton = (state) => {
  const minLenght = 6;
  const {
    email,
    password,
  } = state;

  const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const emptyFields = checkForEmptyFields(email, password);
  const passwordLength = password.length >= minLenght;
  const validEmail = regexEmail.test(email);
  return !validEmail || !passwordLength || emptyFields;
};

export default validateDisabledButton;
