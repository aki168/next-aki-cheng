import { Box, Heading, Button } from "@chakra-ui/react";
import { Winner } from ".";

const ResetScreen = ({
  winner,
  onReset,
}: {
  winner?: Winner;
  onReset: () => void;
}) => {
  return (
    <Box textColor={"white"} textAlign={"center"} paddingY={"45%"}>
      <Heading>{winner} is winner</Heading>
      <Button colorScheme={"yellow"} onClick={onReset}>
        START
      </Button>
    </Box>
  );
};

export default ResetScreen;
