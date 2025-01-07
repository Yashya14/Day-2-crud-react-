import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEdit, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h1 className="card-title text-center mb-4 text-primary">Employee Management System</h1>
              <p className="card-text">
                Welcome to the Employee Management System. This application is designed to help you manage employee data efficiently. You can add, update, view, and delete employee information with ease.
              </p>
              <p className="card-text">
                Our goal is to provide a simple and intuitive interface for managing employee records. Whether you are a small business or a large corporation, our system is designed to scale with your needs.
              </p>
              <p className="card-text">
                Key Features:
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faUserPlus} className="text-success me-2" />
                  Add new employees
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faEdit} className="text-warning me-2" />
                  Update existing employee information
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faEye} className="text-info me-2" />
                  View detailed employee profiles
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faTrashAlt} className="text-danger me-2" />
                  Delete employee records
                </li>
              </ul>
              <p className="card-text mt-4">
                We hope you find our Employee Management System useful and easy to use. If you have any questions or feedback, please feel free to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;