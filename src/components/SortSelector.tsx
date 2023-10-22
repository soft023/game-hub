import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortProps {
  currentSortBy: string | null;
  onSelectSort: (sortBy: string) => void;
}
const SortSelector = ({ onSelectSort, currentSortBy }: SortProps) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritiv", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortedBy = sortOrder.find((order) => order.value === currentSortBy);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortedBy?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrder.map((item, index) => (
          <MenuItem
            value={item.value}
            key={index}
            onClick={() => onSelectSort(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
