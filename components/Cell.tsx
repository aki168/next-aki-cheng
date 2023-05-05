import { CellProps } from "../types";
import { Box } from "@chakra-ui/react";

export const Cell = ({ value, toggle, idx }: CellProps) => {
  return (
    <Box
      width={"150px"}
      height={"150px"}
      onClick={() => toggle(idx)}
      cursor={"pointer"}
      outline={"none"}
      border={"1px"}
      textColor={"wheat"}
      fontSize={"7xl"}
    >
      {value === "o" ? "O" : value ? "X" : null}
    </Box>
  );
};
