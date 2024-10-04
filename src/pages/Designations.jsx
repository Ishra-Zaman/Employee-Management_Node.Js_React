import React, { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import { Button, Spinner, Link } from "@nextui-org/react";
import DesignationTable from "../components/designation/DesignationTable";

const Designations = () => {
  const [designations, setDesignations] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/designations`)
      .then((response) => {
        console.log(response.data);
        setDesignations(response.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-2xl mb-8 mt-4 text-center text-primary">
        Designations
      </h2>
      <Button
        startContent={<FaArrowLeftLong />}
        size="sm"
        className="mb-6"
        as={Link}
        href="/"
      >
        Back to Homepage
      </Button>
      {designations.length === 0 ? (
        <Spinner
          className="flex"
          label="Loading..."
          color="primary"
          size="lg"
        />
      ) : (
        <DesignationTable designations={designations} />
      )}
    </div>
  );
};

export default Designations;
