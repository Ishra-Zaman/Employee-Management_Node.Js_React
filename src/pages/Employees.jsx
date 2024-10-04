import React, { useState, useEffect } from "react";
import { Button, Link } from "@nextui-org/react";
import { CiSquarePlus } from "react-icons/ci";
import axios from "axios";

import EmployeeTable from "../components/employee/EmployeeTable";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees`)
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-2xl text-center text-primary mb-6 mt-4">
        Employees
      </h2>
      <Button href="/employees/add" as={Link} variant="solid" startContent={<CiSquarePlus />}> Add Employee</Button>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default Employees;
