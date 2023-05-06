import type { NextPage } from "next";

import { Data } from "./api/hello";
import { useEffect, useState } from "react";
import About from "./about";

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
      <div className="container mx-auto">
        {/* <h1 className="text-3xl font-bold underline text-blue-500">
          Hello world! {dataSource?.name}
        </h1> */}
      </div>
      <About />
    </>
  );
};

export default Home;
