import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ViewUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  // Function to fetch a single user's data
  const getUser = async (id) => {
    try {
      const result = await axios.get(`http://localhost:8000/user/${id}`);
      if (result.status === 200) {
        setUser(result.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  return (
    <div className="container my-5 py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">User Details</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>ID:</strong> {user.id}</li>
                <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
                <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                <li className="list-group-item"><strong>Contact:</strong> {user.contact}</li>
                <li className="list-group-item"><strong>Role :</strong> {user.role}</li>
                <li className="list-group-item"><strong>Skills:</strong>
                  <ul>
                    {user.skills && user.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </li>
                </ul>

                
                
                
                
              
              <button className="btn btn-primary mt-4 mx-3" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;