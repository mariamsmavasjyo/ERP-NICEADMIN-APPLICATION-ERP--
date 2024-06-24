// src/components/Form.js
import React, { useState } from 'react';
import './Forms.css'; // Import the CSS file for styling

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '' }); // Clear the form after submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
        </label>
        <button type="submit" className="form-submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
