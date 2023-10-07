import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => (
  <HStack>
    <Image src={logo} boxSize="50px" />
    <Text>Nav Bar Area</Text>
  </HStack>
);

export default NavBar;