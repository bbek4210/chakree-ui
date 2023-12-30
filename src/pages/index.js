import React from "react";
import Details from "@/components/Details";
import YourCart from "@/components/YourCart";
import { Container, Flex } from "@chakra-ui/react";

const index = () => {
  return (
    <Container maxWidth="container.xl" padding={10}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Details />
        <YourCart />
      </Flex>
    </Container>
  );
};

export default index;
