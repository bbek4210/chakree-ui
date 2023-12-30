import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Details = () => {
  return (
    <VStack w={"full"} h={"full"} p={10} spacing={10} alignItems={"flex-start"}>
      <VStack spacing={2} align={"flex-start"}>
        <Heading>Your Details</Heading>
        <Text>if you already have an account ,click here to login.</Text>
      </VStack>

      <SimpleGrid column={2} columnGap={3} rowGap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Fisrt Name</FormLabel>
            <Input placeholder="enter your first name"></Input>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="enter your last name"></Input>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="enter your adress "></Input>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="enter your city name "></Input>
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="nepal">NEPAL</option>
              <option value="india">INDIA</option>
              <option value="china">CHINA</option>
              <option value="bhutan">BHUTAN</option>
              <option value="japan">JAPAN</option>
              <option value="united states">UNITED STATES</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox>Ship to the billing address.</Checkbox>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Button className="btn" w={"full"} size={"lg"}>
            Place Items
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
