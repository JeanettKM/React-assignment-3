import React, { useState } from "react";

const Contact = () => {
  // State for form data
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Manage input changes and update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Validate form inputs and return errors object
  const validate = () => {
    let errors = {};

    // Check if the full name has at least 3 characters
    if (form.fullName.length < 3)
      errors.fullName = "Full name must be at least 3 characters.";

    // Check if subject has at least 3 characters
    if (form.subject.length < 3)
      errors.subject = "Subject must be at least 3 characters.";

    // Check email validity
    if (!/\S+@\S+\.\S+/.test(form.email))
      errors.email = "Email must be a valid email address.";

    // Check if the message has at least 3 characters
    if (form.body.length < 3)
      errors.body = "The message must be at least 3 characters.";

    return errors; // Return validation errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const validationErrors = validate(); // Validate the form inputs
    setErrors(validationErrors);

    // Check if there are errors in the form
    if (Object.keys(validationErrors).length === 0) {
      console.log(form); // If there are no errors, log the data
    }
  };

  return (
    <div className="container">
      <h1 className="title">Contact us</h1>
      {/* Form element with a submit handler */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className={errors.fullName ? "input-error" : ""}
            />
            {/* Render validation error if an error occurs */}
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={errors.subject ? "input-error" : ""}
            />
            {/* Render validation error if an error occurs */}
            {errors.subject && (
              <span className="error-message">{errors.subject}</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {/* Render validation error if an error occurs */}
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label>
            Body:
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              className={errors.body ? "input-error" : ""}
            />
            {/* Render validation error if an error occurs */}
            {errors.body && (
              <span className="error-message">{errors.body}</span>
            )}
          </label>
        </div>
        {/* Submit the form */}
        <button type="submit" className="button submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
