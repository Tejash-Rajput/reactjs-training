import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";

/**
 * Custom Hook - Handles form validation logic.
 * @param {Object} formData - The form data.
 * @returns {Object} An object containing validation functions and errors.
 */
const useFormValidation = (formData) => {
  const [errors, setErrors] = useState({});

  /**
   * Validates the form fields.
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordError = validatePassword(formData.password);
      if (passwordError) newErrors.password = passwordError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetErrors = () => setErrors({});

  return { errors, validateForm, resetErrors };
};

export default useFormValidation;
