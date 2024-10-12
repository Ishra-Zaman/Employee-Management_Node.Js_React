import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Select,
  SelectItem,
  Link,
} from "@nextui-org/react";
import axios from "axios"; // Import axios for API requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    email_address: "",
    phone: "",
    salary: "",
    designation_id: "",
  });

  const [designations, setDesignations] = useState([]); // State to hold designations

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch the designations from the API to populate the select
    const fetchDesignations = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/designations`
        );
        setDesignations(response.data);
      } catch (error) {
        console.error("Error fetching designations:", error);
      }
    };

    fetchDesignations();
  }, []); // Run once when the component mounts

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to add new employee
    axios
      .post(`${process.env.REACT_APP_API_URL}/employees`, employeeData)
      .then(() => {
        navigate("/employees"); // Redirect to employees page after success
      })
      .catch((error) => console.error("Error adding employee:", error));
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl mb-8 mt-4 text-center text-primary">
        Add Employee
      </h1>

      <Card>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <Input
                label="First Name"
                name="first_name" 
                value={employeeData.first_name}
                onChange={handleInputChange}
                placeholder="Enter the first name of the employee"
                required
              />
            </div>

            <div className="mb-5">
              <Input
                label="Last Name"
                name="last_name" // Add name attribute
                value={employeeData.last_name} // Controlled input
                onChange={handleInputChange}
                placeholder="Enter the last name of the employee"
                required
              />
            </div>

            <div className="mb-5">
              <Input
                label="Address"
                name="address" // Add name attribute
                value={employeeData.address} // Controlled input
                onChange={handleInputChange}
                placeholder="Enter the address of the employee"
              />
            </div>

            <div className="mb-5">
              <Input
                label="Email Address"
                name="email_address" // Add name attribute
                value={employeeData.email_address} // Controlled input
                onChange={handleInputChange}
                placeholder="Enter the email address of the employee"
                type="email"
                required
              />
            </div>

            <div className="mb-5">
              <Input
                label="Phone Number"
                name="phone" // Add name attribute
                value={employeeData.phone} // Controlled input
                onChange={handleInputChange}
                placeholder="Enter the phone number of the employee"
                required
              />
            </div>

            <div className="mb-5">
              <Input
                label="Salary"
                name="salary" // Add name attribute
                value={employeeData.salary} // Controlled input
                onChange={handleInputChange}
                placeholder="Enter the salary of the employee"
                required
              />
            </div>

            <div className="mb-5 w-full">
              <Select
                label="Designations"
                name="designation_id" // Add name attribute
                value={employeeData.designation_id} // Controlled input
                onChange={handleInputChange} // Handle change
                placeholder="Select the designation of the employee"
                className="w-full"
                required
              >
                {designations.map((designation) => (
                  <SelectItem key={designation.id} value={designation.id}>
                    {designation.name}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="mb-5">
              <Button auto color="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>

          <div>
            <Link href="/employees" passHref>
              <Button auto color="primary" shadow rounded>
                Go Back
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddEmployee;
