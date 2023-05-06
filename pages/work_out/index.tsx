import { NextPage } from "next";
import NextLink from "next/link";
import { WorkHeader } from "../../components/WorkHeader";
import { Text, Link } from "@chakra-ui/react";
import Layout from "../../components/Layout";

const WorkOutPage: NextPage = () => {
  const NavItems = [
    {
      label: "Multiplication Table",
      linkTo: "/work_out/multiplication_table_01",
    },
    {
      label: "clock",
      linkTo: "",
    },
    {
      label: "Calculator",
      linkTo: "",
    },
    {
      label: "Global Time Zone",
      linkTo: "/work_out/time_zone_04",
    },
    {
      label: "Weather Dashboard",
      linkTo: "",
    },
    {
      label: "Sixty Second Game",
      linkTo: "",
    },
    {
      label: "Canvas",
      linkTo: "",
    },
    {
      label: "Tic Tac Toe",
      linkTo: "/work_out/tic_tac_toe_08",
    },
    {
      label: "Lottery",
      linkTo: "",
    },
    {
      label: "Lorem Generator",
      linkTo: "",
    },
    {
      label: "Light Box",
      linkTo: "",
    },
    {
      label: "Puzzle",
      linkTo: "",
    },
    {
      label: "Snake Game",
      linkTo: "",
    },
    {
      label: "Draw Lots",
      linkTo: "",
    },
    {
      label: "Death Note",
      linkTo: "",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-4 px-2">
        <WorkHeader isShowBackBtn={false} />
        <div className="grid auto-rows-[192px] grid-cols-1 md:grid-cols-3 gap-4 py-4">
          {NavItems.map(({ label, linkTo }, i) => {
            return (
              <Link
                href={linkTo || ""}
                as={NextLink}
                key={i}
                color="blue.100"
                _hover={{ color: "blue.500", background: "blue.100" }}
                className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
                  i === 3 || i === 6 ? "col-span-2" : ""
                }`}
              >
                <Text
                  fontWeight={"bold"}
                  textAlign={"center"}
                  marginY={"auto"}
                  height={"full"}
                  fontSize={"2xl"}
                >
                  {label}
                </Text>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default WorkOutPage;
