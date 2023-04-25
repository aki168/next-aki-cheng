import { NextPage } from "next";
import { useEffect, useMemo, useState, useRef } from "react";
import { get1to9 } from "../../utils/common";
import { SimpleGrid, Heading, Box } from "@chakra-ui/react";

type Status = "O" | "X" | "";

type BoxZone = {
  id: string;
  setToggle: Function;
  toggle: boolean;
  setPassIndex: Function;
};

const Field = ({ id, setToggle, toggle, setPassIndex }: BoxZone) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [current, setCurrent] = useState<Status>("");
  // const current = useMemo((): Status => {
  //   if (isClicked) {
  //     return toggle ? "O" : "X";
  //   } else {
  //     return "";
  //   }
  // }, [isClicked]);
  useEffect(()=>{
    if (isClicked) {
      setCurrent(toggle ? "O" : "X");
    } 
  },[isClicked])
  return (
    <Box
      id={id}
      className={`h-[100px] w-[100px] bg-slate-900 text-white flex justify-center items-center`}
      onClick={() => {
        if (isClicked) return;
        setToggle(!toggle);
        setIsClicked(true);
        setPassIndex(id);
      }}
    >
      <p className="text-4xl">{current}</p>
    </Box>
  );
};

const TicTacToe: NextPage = () => {
  const isInitMount = useRef(true);
  const [toggle, setToggle] = useState<boolean>(false);
  const [isOver, setIsOver] = useState<boolean>(false);
  const [passIndex, setPassIndex] = useState<number>(0);
  const [currentUserA, setCurrentUserA] = useState<Status[]>([]);
  const [currentUserB, setCurrentUserB] = useState<Status[]>([]);

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
    return winCondition.map((arr) => JSON.stringify(arr));
  };

  const boxes = get1to9().map((box) => ({
    id: box.toString(),
  }));

  useEffect(() => {
    if (isInitMount.current) {
      isInitMount.current = false;
    } else {
      return toggle
        ? () => {
            setCurrentUserA((prev) => {
              let newArr = [...prev];
              newArr[Number(passIndex)] = "X";
              return newArr;
            });
          }
        : () => {
            setCurrentUserB((prev) => {
              let newArr = [...prev];
              newArr[Number(passIndex)] = "O";
              return newArr;
            });
          };
    }
  }, [passIndex]);
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
              setPassIndex={setPassIndex}
            />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default TicTacToe;
