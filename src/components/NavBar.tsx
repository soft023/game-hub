import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

interface Props {
  onSendSearch: (word: string) => void;
}

const NavBar = ({ onSendSearch }: Props) => (
  <HStack justifyContent={"space-between"} padding="10px">
    <Image src={logo} boxSize="50px" />
    <SearchBox onSendSearch={onSendSearch} />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
