import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSendSearch: (word: string) => void;
}
const SearchBox = ({ onSendSearch }: Props) => {
  const wordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (wordRef.current) onSendSearch(wordRef.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={wordRef}
          borderRadius={30}
          type="text"
          placeholder="Search Game"
          variant="filled"
          required
        />
      </InputGroup>
    </form>
  );
};

export default SearchBox;
