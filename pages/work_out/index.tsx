import { NextPage } from "next";
import Navbar from "../../components/Navbar";

const WorkOutPage: NextPage = () => {
  
  const NavItems = [
    {
      label:"",
      linkTo:""
    },
  ]

  return <div className="container mx-auto">
    WorkOut
    <Navbar navItems={NavItems} />
  </div>;
};

export default WorkOutPage;
