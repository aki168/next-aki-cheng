import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { get1to9 } from "../../utils/comman";
import { SimpleGrid, Heading, Box } from "@chakra-ui/react";

type Status = "O" | "X" | "";

type BoxZone = {
  id: string;
  setToggle: Function;
  toggle: boolean;
};

const Field = ({ id, setToggle, toggle }: BoxZone) => {
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
      className="h-[100px] w-[100px] bg-slate-900 text-white flex justify-center items-center"
      onClick={() => {
        setToggle(!toggle);
        setIsClicked(true);
      }}
    >
      <p className="text-4xl">{current}</p>
    </Box>
  );
};

const ticTacToe: NextPage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const boxes = get1to9().map((box) => ({
    id: box.toString(),
  }));

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
      <SimpleGrid
        columns={[3, 3, 3]}
        className="w-[305px] h-[305px] border border-blue-300 mx-auto"
      >
        {boxes.map(({ id }) => (
          <Field key={id} id={id} toggle={toggle} setToggle={setToggle} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ticTacToe;
