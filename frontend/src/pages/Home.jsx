import React, { useState, useEffect } from "react";
import AddEditUser from "./AddEditUser.jsx";
import axios from "axios";
import {Link} from "react-router-dom"
import {toast} from "react-toastify"

const Home = () => {
  const [data, setData] = useState([]);

  // for all users
  useEffect(() => {
    getUsers();
  }, []);

  // // get simgle user
  // useEffect(() => {
  //   getSingleUser();
  // },[id])

  //  const getSingleUser = async (id) => {
  //   const result = await axios.get(`http://localhost:8000/user/${id}`);
  //   if (result.status === 200) setData({...result.data[0]});
  // };

  // get all users
  const getUsers = async () => {
    const result = await axios.get("http://localhost:8000/users");
    if (result.status === 200) setData(result.data);
    console.log(result.data);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const result = await axios.delete(`http://localhost:8000/user/${id}`);
      if (result.status === 200) {
        toast.success(result.data);
        getUsers();
      }
    }
  };

  

  return (
    <>
      <h1 className="text-center mt-5">Employee List</h1>
      <div className="container mt-3 d-flex justify-content-center">
        <div className="form-container w-50 p-4 border rounded shadow-sm">
          <AddEditUser />
        </div>
      </div>

      <table className="container mt-5 border shadow table table-striped">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((employee, index) => {
              return (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.contact}</td>
                  <td>
                    <Link >
                      <button className="btn btn-primary me-2">Edit</button>
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
