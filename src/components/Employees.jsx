import React from "react";
import "./Employees.css";
import male from "../images/male.png";
import female from "../images/female.png";

const Employees = ({
  employees,
  selectedTeam,
  handleSelectionChange,
  handleClick,
}) => {
  return (
    <div className="employees">
      <select
        className="form-select d-flex mx-auto"
        aria-label="Default select example"
        value={selectedTeam}
        onChange={handleSelectionChange}
      >
        <option value="TeamA">TeamA</option>
        <option value="TeamB">TeamB</option>
        <option value="TeamC">TeamC</option>
        <option value="TeamD">TeamD</option>
      </select>
      <div className="row">
        {employees.map((employee) => (
          <div
            className="col-md-3"
            key={employee.id}
            id={employee.id}
            onClick={handleClick}
          >
            <div
              className="card shadow rounded"
              id={employee.teamName === selectedTeam ? "show" : "hide"}
            >
              <img
                src={employee.gender === "male" ? male : female}
                className="card-img-top"
                alt="card--img"
              />
              <div className="card-body">
                <h1>
                  Full Name: <span>{employee.fullName}</span>
                </h1>
                <p>
                  Designation: <span>{employee.designation}</span>
                </p>
              </div>
            </div>
            {/* end card */}
          </div>
        ))}

        {/* end col */}
      </div>
      {/* end row */}
    </div>
  );
};

export default Employees;
