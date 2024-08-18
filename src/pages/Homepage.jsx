import React from "react";
import { Flex, Heading, Link, Text } from "@radix-ui/themes";

const Homepage = () => {
  return (
    <Flex align="center" direction="column" justify="center" height="100vh">
      <Heading mb="2" size="8" className="!text-white">
        Welcome to Employee Management
      </Heading>
      <Text mb="4" size="4">
        Please navigate through our options
      </Text>
      <Flex direction="row" gap="4">
        <Link href="/designations" size="3" color="violet">
          Designations
        </Link>
        <Link href="/employees" size="3" color="cyan">
          Employees
        </Link>
      </Flex>
    </Flex>
  );
};

export default Homepage;
