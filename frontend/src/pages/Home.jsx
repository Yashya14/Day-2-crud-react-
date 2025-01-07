import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  // State to manage the list of users
  const [data, setData] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    getUsers();
  }, []);

  // Function to fetch all users
  const getUsers = async () => {
    const result = await axios.get("http://localhost:8000/users");
    if (result.status === 200) setData(result.data);
  };

  // Function to delete a user
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const result = await axios.delete(`http://localhost:8000/user/${id}`);
      if (result.status === 200) {
        toast.success("User deleted successfully!");
        getUsers(); // Refresh the list of users
      } else {
        toast.error("Failed to delete user. Please try again.");
      }
    }
  };

  return (
    <>
      <h1 className="text-center mb-4 mt-3">Employee Data</h1>
      <div className="container mt-3 d-flex justify-content-center">
        <div className="p-4 border rounded shadow-sm">
          <table className="table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.contact}</td>
                  <td>
                    <Link to={`/update/${employee.id}`}>
                      <button className="btn btn-primary m-2">Edit</button>
                    </Link>
                    <button
                      className="btn btn-danger "
                      onClick={() => deleteUser(employee.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${employee.id}`}>
                      <button className="btn btn-success m-2">View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
