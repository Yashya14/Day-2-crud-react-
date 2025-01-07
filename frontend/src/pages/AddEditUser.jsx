import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEditUser = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, contact } = formData;
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Fetch user data if ID is present (for editing)
  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  // Function to fetch a single user's data
  const getSingleUser = async (id) => {
    const result = await axios.get(`http://localhost:8000/user/${id}`);
    if (result.status === 200) {
      setFormData(result.data[0]);
    }
  };

  // Function to add a new user
  const addEmployee = async (formData) => {
    try {
      const result = await axios.post("http://localhost:8000/user", formData);
      if (result.status === 200) {
        toast.success("User added successfully!");
        setFormData(initialState);
        navigate("/"); // Navigate back to home page
      }
    } catch (error) {
      toast.error("Failed to add user. Please try again.");
    }
  };

  // Function to update an existing user
  const updateEmployee = async (formData, id) => {
    try {
      const result = await axios.put(`http://localhost:8000/user/${id}`, formData);
      if (result.status === 200) {
        toast.success("User updated successfully!");
        setFormData(initialState);
        navigate("/"); // Navigate back to home page
      }
    } catch (error) {
      toast.error("Failed to update user. Please try again.");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please enter all fields");
    } else {
      if (id) {
        updateEmployee(formData, id); // Update user if ID is present
      } else {
        addEmployee(formData); // Add new user if no ID
      }
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">{id ? "Update User" : "Add User"}</h2>
              <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="mb-3 w-100 has-validation">
                  <label htmlFor="name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
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
                    name="email"
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
                    name="contact"
                    placeholder="Enter your contact number"
                    onChange={handleInputChange}
                    value={contact}
                    required
                  />
                </div>

                <button className="btn btn-success w-100" type="submit">
                  {id ? "Update" : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditUser;