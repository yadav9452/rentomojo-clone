import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import LocationMenu from "./LocationMenu";
import { BsCart2 } from "react-icons/bs";

const fields = [
  {
    id: 1,
    name: "rahul",
  },
];

export default function WithSubnavigation() {
  return (
    <Box margin="auto">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        gap="30px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        flexDirection="row"
        justifyContent={"space-around"}
      >
        {/* <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex> */}
        <Box cursor="pointer">
          {/* <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}> */}
          <img
            src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/34e7cf10-932f-495d-aa1f-d76577d50be4.png"
            alt=""
            width={"300px"}
            cursor="pointer"
          />
        </Box>
        <Box>
          <LocationMenu />
        </Box>
        <Box>
          <Input
            placeholder="Search for products"
            border="1px solid red"
            type="search"
            {...fields}
            width={"700px"}
            padding="20px"
            margin={"auto"}
            autoComplete="on"
            borderRadius={"10px"}
          />
        </Box>
        <Flex alignItems={"center"} gap="10px" cursor="pointer">
          <BsCart2 size={"20px"} />
          <Text>Cart</Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"red"}
            href={"#"}
            border="1px solid red"
            borderRadius={"8px"}
            _hover={{
              bg: "white",
              color: "red",
            }}
          >
            LOGIN/SIGNUP
          </Button>
        </Stack>
      </Flex>
      {/* </Flex> */}
    </Box>
  );
}
