import { useEffect, useState } from "react";
import { SimpleGrid as Wrapper } from "@chakra-ui/react";
import { CellValue, Winner } from "./types";
import { Cell } from "./Cell";

const winConditions = [
  [0, 1, 2],[3, 4, 5],[6, 7, 8], // すいへいせん
  [0, 3, 6],[1, 4, 7],[2, 5, 8], // すいちょく
  [0, 4, 8],[2, 4, 6], // きょくせん
];

const Board = ({ onGameEnd }: { onGameEnd: (winner: Winner) => void }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));

  const currentSymbol = cells.filter(Boolean).length % 2 ? "o" : "x";
  const tie = cells.filter(Boolean).length === 9;

  const toggleCell = (idx: number) => {
    setCells(prevCells => prevCells.map((cell, i) => (idx === i ? currentSymbol : cell)));
  };

  const winCondition = winConditions.find(cond => {
		const line = cond.map(cellIndex => cells[cellIndex]); /// set symbol
		return line[0] && line.every(cellValue => cellValue === line[0]); // symbol in line => "all the same"
	});
  // winCondition .... ex: [1, 4, 7]
  
  const winnerSymbol = winCondition ? cells[winCondition[0]] : undefined;

  useEffect(()=>{
    if(tie) {
      onGameEnd("tie");
    }
    if(winnerSymbol){
      onGameEnd(winnerSymbol);
    }
    console.log(winnerSymbol, tie);
  },[winnerSymbol, tie])
  return (
    <Wrapper
      textColor={"white"}
      textAlign={"center"}
      width={"448px"}
      columns={[3, 3, 3]}
    >
      {cells.map((cell, i) => (
        <Cell value={cell} toggle={toggleCell} key={i} idx={i} />
      ))}
    </Wrapper>
  );
};

export default Board;
