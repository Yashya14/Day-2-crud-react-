import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "", // Add "contact" here, not "age" as in your destructuring
};

const AddEditUser = () => {
  const [formData, setFormData] = useState(initialState);

  // Destructure from formData instead of initialState
  const { name, email, contact } = formData;

  const addEmployee = async (formData) => {
    try {
      const result = await axios.post("http://localhost:8000/user", formData);
      if (result.status === 200) {
        toast.success("User added successfully!"); // Fixed this line
        setFormData(initialState); // Reset the form after success
      }
    } catch (error) {
      toast.error("Failed to add user. Please try again."); // Handle errors
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="mb-3 w-100 has-validation">
          <label htmlFor="name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name" // Make sure name matches the state key
            placeholder="Enter your first name"
            onChange={handleInputChange}
            value={name}
            required
          />
        </div>

        <div className="mb-3 w-100 has-validation">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email" // Ensure this matches the state key
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={email}
            required
          />
        </div>

        <div className="mb-3 w-100 has-validation">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact" // Ensure this matches the state key
            placeholder="Enter your contact number"
            onChange={handleInputChange}
            value={contact}
            required
          />
        </div>

        <button className="btn btn-success m-2" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default AddEditUser;
