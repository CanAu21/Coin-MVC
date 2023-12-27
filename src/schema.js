import * as yup from 'yup';

// Regular expression for password validation:
// 1 uppercase letter
// 1 lowercase letter
// 1 digit
// 1 special character
// Minimum length of 5 characters
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

// Validation schema
// A structure where we define the conditions that must be met
// for the form inputs to be considered valid.

// When defining conditions for input fields, the first yup function
// we use is to specify the data type, followed by chaining functions
// to set the conditions in a sequential manner.

export const schema = yup.object().shape({
  // Define requirements for the email field
  email: yup
    .string()
    .email('Please enter a valid email format')
    .required('Email field is required'),

  // Define requirements for the age field
  age: yup
    .number()
    .min(18, 'Your age must be greater than 18')
    .max(100, 'Your age cannot be greater than 100')
    .integer('Please enter a whole number')
    .required('Age field is required'),

  // Define requirements for the password field
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .matches(regex, 'Your password is not strong enough')
    .required('Password field is required'),

  // Define requirements for the confirm password field
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Your confirmation password is incorrect')
    .required('Password Confirmation is required'),
});
