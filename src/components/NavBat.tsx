import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBat = (props: SearchInputProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" padding="10px" />
      <SearchInput onSearch={props.onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBat;
