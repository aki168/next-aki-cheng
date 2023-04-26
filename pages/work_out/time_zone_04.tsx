import { NextPage } from "next";
import { Card, Flex, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

// 先從自己所在的時區，推到 UTC+0 然後再加上 timezone
interface ZoneCard {
  city: string;
  utcDiff: number;
  idx: number;
}

type LocalTime = {
  year: number;
  month: string;
  date: string;
  hour: string;
  minute: string;
};

const Zone = ({ city, utcDiff, idx }: ZoneCard) => {
  const [time, setTime] = useState<LocalTime>();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const cardStyle = {
    display: "flex",
    padding: 4,
    border: "white",
    textColor: idx % 2 === 0 ? "black" : "white",
    background: idx % 2 === 0 ? "white" : "black",
    borderRadius: "none",
  };

  const zeroInHead = (num: number) =>
    num.toString().length === 1 ? `0${num}` : `${num}`;

  useEffect(() => {
    const updateInHalfMin = (diff: number) => {
      const init = () => {
        let clock = new Date();
        let getLocalDiff = (clock.getTimezoneOffset()) / 60;
        clock.setUTCHours(clock.getUTCHours() + getLocalDiff + diff);
        setTime({
          year: clock.getFullYear(),
          month: monthNames[clock.getMonth()],
          date: zeroInHead(clock.getDate()),
          hour: zeroInHead(clock.getHours()),
          minute: zeroInHead(clock.getMinutes()),
        });
      };
      init();
      setInterval(init, 30 * 1000);
    };
    updateInHalfMin(utcDiff);
  }, []);
  return (
    <Card {...cardStyle}>
      <SimpleGrid columns={[2, 2, 2]}>
        <Flex direction={"column"}>
          <Heading size={"lg"}>{city}</Heading>
          <Heading size={"md"}>
            {time?.date} {time?.month}. {time?.year}
          </Heading>
        </Flex>
        <Heading textAlign={"center"} size={"3xl"}>
          {time?.hour}:{time?.minute}
        </Heading>
      </SimpleGrid>
    </Card>
  );
};

const TimeZone: NextPage = () => {
  const cityList = useMemo(
    () => [
      {
        city: "NEW YORK",
        utcDiff: -4,
      },
      {
        city: "LONDON",
        utcDiff: 1,
      },
      {
        city: "BANGKOK",
        utcDiff: 7,
      },
      {
        city: "TAIPEI",
        utcDiff: 8,
      },
      {
        city: "OSAKA",
        utcDiff: 9,
      },
      {
        city: "SYDNEY",
        utcDiff: 10,
      },
    ],
    []
  );
  return (
    <div className="container mx-auto p-3 max-w-sm">
      <Box borderRadius={"none"} border={"1px"} >
        <Card
          background={"black"}
          textColor={"white"}
          padding={4}
          borderRadius={"none"}
          borderBottomColor={"white"}
          borderBottom={"1px"}
        >
          <Heading>WORLD TIME</Heading>
        </Card>
        {cityList.map((zone, idx) => (
          <Zone key={idx} idx={idx} {...zone} />
        ))}
      </Box>
    </div>
  );
};

export default TimeZone;
