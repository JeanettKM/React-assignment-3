import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (form.fullName.length < 3)
      errors.fullName = "Full name must be at least 3 characters.";
    if (form.subject.length < 3)
      errors.subject = "Subject must be at least 3 characters.";
    if (!/\S+@\S+\.\S+/.test(form.email))
      errors.email = "Email must be a valid email address.";
    if (form.body.length < 3)
      errors.body = "Body must be at least 3 characters.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(form);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span>{errors.fullName}</span>}
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
            />
            {errors.subject && <span>{errors.subject}</span>}
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
            />
            {errors.email && <span>{errors.email}</span>}
          </label>
        </div>
        <div className="form-group">
          <label>
            Body:
            <textarea name="body" value={form.body} onChange={handleChange} />
            {errors.body && <span>{errors.body}</span>}
          </label>
        </div>
        <button type="submit" className="button submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
