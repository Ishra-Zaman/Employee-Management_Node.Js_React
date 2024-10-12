import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Select,
  SelectItem,
  Link,
} from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDesignation = () => {
  const [designationData, setDesignationData] = useState({
    name: "",
    description: "",
    status: "active",
  });

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const navigate = useNavigate(); // Hook for navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDesignationData({
      ...designationData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to add new designation
    axios
      .post(`${process.env.REACT_APP_API_URL}/designations`, designationData)
      .then(() => {
        navigate("/designations"); // Redirect to designations page after success
      })
      .catch((error) => console.error("Error adding designation:", error));
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl mb-8 mt-4 text-center text-primary">
        Add Designation
      </h1>

      <Card>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <Input
                label="Designation Name"
                name="name" 
                value={designationData.name}
                onChange={handleInputChange}
                placeholder="Enter the name of the designation"
                required
              />
            </div>

            <div className="mb-5">
              <Input
                label="Description"
                name="description"
                value={designationData.description} 
                onChange={handleInputChange}
                placeholder="Enter the description of the designation"
                multiline
                rows={1}
              />
            </div>

            <div className="mb-5 w-full">
              <Select
                label="Status"
                name="status" 
                value={designationData.status} 
                onChange={handleInputChange}
                 placeholder="Select the status of the designation"
                className="w-full"
              >
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
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
            <Link href="/designations" passHref>
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

export default AddDesignation;
