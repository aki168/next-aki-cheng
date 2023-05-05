import { NextPage } from "next";
import { get1to9 } from "../../utils/common";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { WorkHeader } from "../../components/WorkHeader";

type Card = {
  key: number;
  constants: number[];
  ans: number[];
};

const generateCard = (keyNum: number): Card => {
  const ans = get1to9().map((item) => item * keyNum);
  return {
    key: keyNum,
    constants: get1to9(),
    ans,
  };
};

const generateCards = (): Card[] => get1to9().map((num) => generateCard(num));

const MultiplicationTable: NextPage = () => {
  return (
    <div className="sm:container mx-auto p-4">
      <WorkHeader isShowBackBtn={true}/>
      <Heading
        size={"4xl"}
        color={"green.500"}
        className="pb-6"
        textAlign={"center"}
      >
        9 X 9 Multiplication Table
        <span className="text-sm ps-2 text-blue-800">By TypeScript</span> 
      </Heading>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {generateCards().map(({ key, constants, ans }) => (
          <Card
            key={key}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack className="w-full">
              <CardBody>
                <Heading
                  className="w-1/2 inline-block"
                  color={`cyan.${key}00`}
                  size={"2xl"}
                >
                  {key}
                </Heading>
                {constants.map((constant, idx) => (
                  <Text
                    className="w-1/2 inline-block"
                    py="2"
                    key={`${key} x ${constant}`}
                  >
                    {key} x {constant} = {ans[idx]}
                  </Text>
                ))}
              </CardBody>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default MultiplicationTable;
