import { NextPage } from "next";
import { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import { Winner, GameState } from "../../../types";
import StartScreen from "./StartScreen";
import Board from "./Board";
import ResetScreen from "./ResetScreen";
import { WorkHeader } from "../../../components/WorkHeader";
import { IconBtn } from "../../../components/IconBtn";

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
      <WorkHeader isShowBackBtn={true}/>
      <Box textAlign={"end"}>
        <IconBtn
          faClass="fa-brands fa-github"
          linkTo={`https://github.com/aki168/next-aki-cheng/blob/main/pages/work_out/tic_tac_toe_08`}
        />
      </Box>
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
