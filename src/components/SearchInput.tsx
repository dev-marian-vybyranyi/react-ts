import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) props.onSearch(ref.current.value);
        if (ref.current) {
          console.log(ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search"
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
