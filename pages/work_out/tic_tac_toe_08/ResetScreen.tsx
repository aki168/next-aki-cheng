import { Box, Heading, Button } from "@chakra-ui/react";
import { Winner } from "./types";

const ResetScreen = ({
  winner,
  onReset,
}: {
  winner?: Winner;
  onReset: () => void;
}) => {
  return (
    <Box textColor={"white"} textAlign={"center"} paddingY={"45%"}>
      {winner === "tie" ? (
        <Heading>tie!</Heading>
      ) : (
        <Heading>{winner} is winner</Heading>
      )}
      <Button colorScheme={"yellow"} onClick={onReset} className="mt-3">
        RESTART
      </Button>
    </Box>
  );
};

export default ResetScreen;
