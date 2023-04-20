import { NextPage } from "next";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

type Card = {
  key: number;
  constants: number[];
  ans: number[];
};

const get1to9 = () => {
  let constantArr = [];
  for (let i = 1, len = 9; i <= len; i++) {
    constantArr.push(i);
  }
  return constantArr;
};

const generaterCard = (keyNum: number): Card => {
  const ans = get1to9().map((item) => item * keyNum);
  return {
    key: keyNum,
    constants: get1to9(),
    ans,
  };
};

const generaterCards = (): Card[] => get1to9().map((num) => generaterCard(num));

const MultiplicationTable: NextPage = () => {
  return (
    <div className="container mx-auto">
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {generaterCards().map(({ key, constants, ans }) => (
          <Card
            key={key}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <CardBody>
                <Heading size={"2xl"}>{key}</Heading>
                {constants.map((constant, idx) => (
                  <Text py="2" key={`${key} x ${constant}`}>
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
