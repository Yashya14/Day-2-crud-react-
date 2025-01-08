import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
  gender: "",
  role: "",
  skills: [],
};

const AddEditUser = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, contact, gender, role, skills } = formData;
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate(); // Hook to navigate

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
      const result = await axios.put(
        `http://localhost:8000/user/${id}`,
        formData
      );
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
    if (!name || !email || !contact || !gender || !role || !skills) {
      toast.error("Please enter all fields");
    } else {
      if (id) {
        updateEmployee(formData, id); // Update user if ID is present
      } else {
        addEmployee(formData); // Add new user if no ID
      }
    }
    console.log(formData);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, skills: [...skills, value] }); // It add value that is checked
      } else {
        setFormData({
          ...formData,
          skills: skills.filter((skill) => skill !== value), // it remove value that is uncheked
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                {id ? "Update User" : "Add User"}
              </h2>
              <form
                className="needs-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3 w-100 has-validation">
                      <label htmlFor="name" className="form-label">
                        FullName
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your fullname"
                        onChange={handleInputChange}
                        value={name}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-6">
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
                  </div>
                </div>

                <div className="mb-3 w-100 has-validation">
                  <label htmlFor="contact" className="form-label">
                    Contact
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    name="contact"
                    placeholder="Enter your contact number"
                    onChange={handleInputChange}
                    value={contact}
                    required
                  />
                </div>

                <div className="mb-3 w-100 has-validation">
                  <label className="form-label">Gender</label>
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      onChange={handleInputChange}
                      checked={gender === "Male"}
                    />
                    <label htmlFor="male" className="form-check-label me-3">
                      Male
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      onChange={handleInputChange}
                      checked={gender === "Female"}
                    />
                    <label htmlFor="female" className="form-check-label">
                      Female
                    </label>
                  </div>
                </div>

                <div className="mb-3 w-100 has-validation">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-select"
                    id="role"
                    name="role"
                    onChange={handleInputChange}
                    value={role}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>

                <div className="mb-3 w-100 has-validation">
                  <label className="form-label">Skills</label>
                  <div>
                    <input
                      type="checkbox"
                      id="html"
                      name="skills"
                      value="HTML"
                      onChange={handleInputChange}
                      checked={skills.includes("HTML")}
                    />
                    <label htmlFor="html" className="form-check-label me-3">
                      HTML
                    </label>
                    <input
                      type="checkbox"
                      id="css"
                      name="skills"
                      value="CSS"
                      onChange={handleInputChange}
                      checked={skills.includes("CSS")}
                    />
                    <label htmlFor="css" className="form-check-label me-3">
                      CSS
                    </label>
                    <input
                      type="checkbox"
                      id="javascript"
                      name="skills"
                      value="JavaScript"
                      onChange={handleInputChange}
                      checked={skills.includes("JavaScript")}
                    />
                    <label htmlFor="javascript" className="form-check-label">
                      JavaScript
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center py-2">
                  <button
                    className="btn btn-outline-success w-50 rounded-pill"
                    type="submit"
                  >
                    {id ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditUser;
