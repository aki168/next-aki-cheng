import { Box, Heading, Button } from "@chakra-ui/react";

const StartScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <Box textColor={"white"} textAlign={"center"} paddingY={"45%"}>
      <Heading marginBottom={"2"}>START GAME</Heading>
      <Button colorScheme={"red"} onClick={onStart}>
        START
      </Button>
    </Box>
  );
};

export default StartScreen;
