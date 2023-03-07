import React, { useState, useEffect } from "react";
import data from "./components/data";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Teams from "./components/Teams";
import Footer from "./components/Footer";

function App() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || data
  );
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );

  const handleSelectionChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const employeeCount = () => {
    return employees.filter((employee) => employee.teamName === selectedTeam);
  };

  const toggleEmployeeTeam = (employee, selectedTeam) => {
    if (employee.teamName === selectedTeam) {
      return { ...employee, teamName: "" };
    } else {
      return { ...employee, teamName: selectedTeam };
    }
  };
  const handleClick = (event) => {
    const transformedCards = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? toggleEmployeeTeam(employee, selectedTeam)
        : employee
    );
    setEmployees(transformedCards);
  };

  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <Router>
      <Nav />
      <Header
        employeeCount={employeeCount}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleSelectionChange={handleSelectionChange}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="/teams"
          element={
            <Teams
              employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
