import React, { useState } from "react";
import Input from "../components/Input";
import useFormValidation from "../hooks/useFormValidation";

/**
 * Form Component - Handles user input and form validation.
 * @component
 * @returns {JSX.Element} The Form component.
 */
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { errors, validateForm, resetErrors } = useFormValidation(formData);

  /**
   * Handles input field changes and updates the form state.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    resetErrors();
  };

  /**
   * Handles form submission.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button className="submit-button" type="submit">
        Signup
      </button>
    </form>
  );
};

export default Form;
