import type { NextPage } from "next";

import { Data } from "./api/hello";
import { useEffect, useState } from "react";
import About from "./about";
import Head from "next/head";

const Home: NextPage<Data> = () => {
  const [dataSource, setDataSource] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/hello");
      const data = await res.json();
      setDataSource(data);
    };
    getData();
  }, []);
  return (
    <>
      <Head>
        <title>HERE IS AKI CHENG</title>
      </Head>
      <div className="container mx-auto"></div>
      <About />
    </>
  );
};

export default Home;
