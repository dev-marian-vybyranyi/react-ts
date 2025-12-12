import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBat = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" padding="10px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBat;
