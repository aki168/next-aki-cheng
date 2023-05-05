import { Heading, Text, Box, Link } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
export const WorkHeader = ({ isShowBackBtn }: { isShowBackBtn: Boolean }) => {
  return (
    <Box display={"flex"}>
      {isShowBackBtn && (
        <Link href="/work_out">
          <ArrowLeftIcon
            _hover={{ color: "blue.500" }}
            boxSize={6}
            marginRight={4}
            marginTop={4}
          />
        </Link>
      )}
      <Box display={"table-column"}>
        <Heading color={"twitter.500"}>TypeScript Work Out</Heading>
        <Text>-- by AKI CHENG</Text>
      </Box>
    </Box>
  );
};
