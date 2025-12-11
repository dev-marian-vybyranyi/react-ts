import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBat = () => {
  return (
    <HStack justifyContent={'space-between'}>
      <Image src={logo} boxSize="60px" padding='10px' />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBat;
