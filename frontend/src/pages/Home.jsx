import React,{useState,useEffect} from "react";
import AddEditUser from "./AddEditUser.jsx"; 
import axios from "axios";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  },[])

  const getUsers = async() => {
    const result = await axios.get("http://localhost:8000/users");
    if(result.status === 200) setData(result.data);
    console.log(data);
  }


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
          {data && data.map((employee,index) => {
            return (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.contact}</td>
                <td>
                
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
