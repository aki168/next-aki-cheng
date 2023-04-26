import { Box } from "@chakra-ui/react";
import { Winner } from ".";

const Board = ({ onGameEnd }: { onGameEnd: (winner: Winner) => void }) => {
  return <Box textColor={"white"} textAlign={"center"} paddingY={"45%"}>
    BOARD
  </Box>;
};

export default Board;
