import { Box, Heading } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
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
    <Box width="100%">
      <Heading size="6" mb="6" mt="4" align="center" color="violet">
        Employees
      </Heading>
      <EmployeeTable employees={employees} />
    </Box>
  );
};

export default Employees;
