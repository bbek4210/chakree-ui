import { MoonIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const YourCart = () => {
  const { toggleColorMode } = useColorMode();
  const { bgColor } = useColorModeValue("gray.50", "whiteAlpha.50");
  const { textColor } = useColorModeValue("gray.600", "whiteAlpha.600");
  return (
    <VStack
      bg={bgColor}
      w={"full"}
      h={"full"}
      p={10}
      spacing={6}
      alignItems={"flex-start"}
    >
      <VStack alignItems={"flex-start"} spacing={3}>
        <Heading size={"2xl"}>Your Cart</Heading>
        <Text>change the theme.</Text>
        <Button
          onClick={toggleColorMode}
          variant={"outline"}
          colorScheme={"black"}
        >
          Click <MoonIcon m={"10px"}></MoonIcon>
        </Button>
      </VStack>
      <HStack spacing={6} alignItems={"center"} w={"full"}>
        <AspectRatio ratio={1} w={24}>
          <img src="./download.jpg" alt="bag" />
        </AspectRatio>
        <Stack
          spacing={0}
          w={"full"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <VStack w={"full"} spacing={0} alignItems={"flex-start"}>
            <Heading size={"md"}>Leather Bag</Heading>
            <Text color={textColor}>LTdX678</Text>
          </VStack>
          <Heading size={"sm"} textAlign={"end"}>
            Rs.1020
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems={"stretch"} w={"full"}>
        <HStack justifyContent={"space-between"}>
          <Text textColor={textColor}>Subtotal</Text>
          <Heading color={"gray"} size={"sm"}>
            Rs.1020.00
          </Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text textColor={textColor}>Shipping</Text>
          <Heading color={"gray"} size={"sm"}>
            Rs.100.00
          </Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text textColor={textColor}>Taxes (estimated)</Text>
          <Heading color={"gray"} size={"sm"}>
            Rs.54.00
          </Heading>
        </HStack>
      </VStack>
      <Divider color={"black.900"}></Divider>
      <HStack justifyContent={"space-between"} w={"full"}>
        <Text color={textColor}>Total</Text>
        <Heading size={"lg"}>Rs.1174</Heading>
      </HStack>
    </VStack>
  );
};

export default YourCart;
