import { NextPage } from "next";
import { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import StartScreen from "./StartScreen";
import Board from "./Board";
import ResetScreen from "./ResetScreen";

export type GameState = "start" | "onGame" | "reset";
export type Winner = "tie" | "O" | "X";

const TicTacToe: NextPage = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [winner, setWinner] = useState<Winner>();

  const onStart = () => {
    setGameState("onGame");
  };

  const onGameEnd = (winner: Winner) => {
    setGameState("reset");
    setWinner(winner);
  };

  const onReset = () => {
    setGameState("onGame");
    setWinner(undefined);
  };

  return (
    <div className="container mx-auto p-4">
      <Heading
        size={"4xl"}
        color={"blue.400"}
        className="pb-6"
        textAlign={"center"}
      >
        Tic Tac Toe 
        <span className="text-sm ps-2 text-blue-800">By TypeScript</span> 
      </Heading>
      <Box boxSize={"md"} background={"blackAlpha.800"} marginX={"auto"}>
        {
          {
            start: <StartScreen onStart={onStart}/>,
            onGame: <Board onGameEnd={onGameEnd}/>,
            reset: <ResetScreen winner={winner} onReset={onReset}/>,
          }[gameState]
        }
      </Box>
    </div>
  );
};

export default TicTacToe;