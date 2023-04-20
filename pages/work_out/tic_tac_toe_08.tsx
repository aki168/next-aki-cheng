import { NextPage } from "next";
import { useEffect, useMemo, useState, useRef, SetStateAction } from "react";
import { get1to9 } from "../../utils/common";
import { SimpleGrid, Heading, Box } from "@chakra-ui/react";

type Status = "O" | "X" | "";

type BoxZone = {
  id: string;
  setToggle: Function;
  toggle: boolean;
  setCurrentStepA: Function;
  setCurrentStepB: Function;
};

const Field = ({
  id,
  setToggle,
  toggle,
  setCurrentStepA,
  setCurrentStepB,
}: BoxZone) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const current = useMemo((): Status => {
    if (isClicked) {
      return toggle ? "O" : "X";
    } else {
      return "";
    }
  }, [isClicked]);
  return (
    <Box
      id={id}
      className={`h-[100px] w-[100px] bg-slate-900 text-white flex justify-center items-center`}
      onClick={() => {
        if (isClicked) return;
        setToggle(!toggle);
        setIsClicked(true);
        return toggle
          ? setCurrentStepA({ id: id.valueOf(), symbol: !toggle ? "O" : "X" })
          : setCurrentStepB({ id: id.valueOf(), symbol: !toggle ? "O" : "X" });
      }}
    >
      <p className="text-4xl">{current}</p>
    </Box>
  );
};

const TicTacToe: NextPage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [currentGameA, setCurrentGameA] = useState<Status[]>(
    get1to9().map((item) => "")
  );
  const [currentGameB, setCurrentGameB] = useState<Status[]>(
    get1to9().map((item) => "")
  );
  const [currentStepA, setCurrentStepA] = useState<{
    id: number;
    symbol: Status;
  }>({ id: 0, symbol: "" });
  const [currentStepB, setCurrentStepB] = useState<{
    id: number;
    symbol: Status;
  }>({ id: 0, symbol: "" });

  const [isOver, setIsOver] = useState<boolean>(false);

  const getEndCondition = (checkSymbol: Status) => {
    let winCondition = [
      [checkSymbol, "", "", checkSymbol, "", "", checkSymbol, "", ""],
      ["", checkSymbol, "", "", checkSymbol, "", "", checkSymbol, ""],
      ["", "", checkSymbol, "", "", checkSymbol, "", "", checkSymbol],
      [checkSymbol, checkSymbol, checkSymbol, "", "", "", "", "", ""],
      ["", "", "", checkSymbol, checkSymbol, checkSymbol, "", "", ""],
      ["", "", "", "", "", "", checkSymbol, checkSymbol, checkSymbol],
      [checkSymbol, "", "", "", checkSymbol, "", "", "", checkSymbol],
      ["", "", checkSymbol, "", checkSymbol, "", checkSymbol, "", ""],
    ];
    return winCondition.map(arr => JSON.stringify(arr));
  };

  const boxes = get1to9().map((box) => ({
    id: box.toString(),
  }));

  useEffect(() => {
    // if (!toggle) {
      setCurrentGameA((prevArr) => {
        prevArr[currentStepA.id-1] = currentStepA.symbol;
        return prevArr;
      });
      // console.log(getEndCondition(currentStepA.symbol))
    // } else {
      setCurrentGameB((prevArr) => {
        prevArr[currentStepB.id-1] = currentStepB.symbol;
        return prevArr;
      });
      // console.log(getEndCondition(currentStepB.symbol))
    // }
  }, [toggle]);

  return (
    <div className="sm:container mx-auto p-4">
      <Heading
        size={"4xl"}
        color={"green.500"}
        className="pb-6"
        textAlign={"center"}
      >
        Tic Tac Toe
      </Heading>
      {isOver ? (
        <Heading color={"red.500"} textAlign={"center"} className="my-3">
          GAME OVER
        </Heading>
      ) : (
        <SimpleGrid columns={[3, 3, 3]} className="w-[305px] h-[305px] mx-auto">
          {boxes.map(({ id }) => (
            <Field
              key={id}
              id={id}
              toggle={toggle}
              setToggle={setToggle}
              setCurrentStepA={setCurrentStepA}
              setCurrentStepB={setCurrentStepB}
            />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default TicTacToe;
