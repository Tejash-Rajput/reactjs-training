/**
 * Validates email format.
 * @param {string} email - The email to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

/**
 * Validates password strength.
 * @param {string} password - The password to validate.
 * @returns {string|null} An error message if invalid, otherwise null.
 */
export const validatePassword = (password) => {
  if (password.length < 8 || password.length > 15) {
    return "Password length should be between 8-15 characters";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password should have at least one uppercase letter";
  }
  if (!/[a-z]/.test(password)) {
    return "Password should have at least one lowercase letter";
  }
  if (!/[0-9]/.test(password)) {
    return "Password should have at least one number";
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return "Password should have at least one special character";
  }
  return null;
};
