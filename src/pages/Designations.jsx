import { Box, Heading } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <Box width="100%">
      <Heading size="6" mb="6" mt="4" align="center" color="violet">
        Designations
      </Heading>
      <DesignationTable designations={designations} />
    </Box>
  );
};

export default Designations;
