import { Link, Button, Wrap, Text, Box } from "@chakra-ui/react";
import { IconBtn } from "./IconBtn";
import NextLink from "next/link";
import { LanguageChanger } from "./LanguageChanger";

type NavItem = {
  key?: string | number;
  label: string;
  linkTo: string;
};

const Navbar = () => {
  const navItems = [
    {
      key: "about",
      label: "About",
      linkTo: "/",
    },
    {
      key: "work",
      label: "Works",
      linkTo: "/works",
    },
    // {
    //   key: "work_out",
    //   label: "work out",
    //   linkTo: "/work_out",
    // },
    // {
    //   key: "contact",
    //   label: "Contact",
    //   linkTo: "/contact",
    // },
  ];
  const icons = [
    {
      faClass: "fa-brands fa-telegram",
      linkTo: "https://t.me/ahsiaki",
    },
    {
      faClass: "fa-brands fa-github",
      linkTo: "https://github.com/aki168",
    },
    {
      faClass: "fa-brands fa-linkedin",
      linkTo: "https://www.linkedin.com/in/aki-17",
    },
    {
      faClass: "fa-solid fa-envelope",
      linkTo: "mailto:ahsi.aki@gmail.com",
    },
  ];
  return (
    <>
      <Box className="hero--wrap" backgroundImage="url('hero.png')">
        <div className="hero">
          <div className="hero__content">Front End Developer</div>
          <Text
            fontSize={"sm"}
            color={"white"}
            textAlign={"end"}
            marginEnd={"20px"}
          >
            Photography in Tsukiji, Japan.
          </Text>
          <Link
            className="hero__title"
            href={"/"}
            display={"block"}
            as={NextLink}
            style={{ textDecoration: "none" }}
          >
            HERE IS
            <br />
            AKI CHENG
          </Link>
          <Menu navItems={navItems} />
          <ul className="hero__list">
            {icons.map((item, idx) => (
              <IconBtn key={idx} {...item} />
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <LanguageChanger />
        </div>
      </Box>
    </>
  );
};

const Menu = ({ navItems }: { navItems: NavItem[] | [] }) => {
  return (
    <Wrap spacing="4px">
      {navItems.map(({ linkTo, label, key }) => {
        let linkToggle = () => (linkTo ? { href: linkTo } : {});
        return (
          <Button key={key || label} size={"sm"} variant={"ghost"}>
            <Link
              as={NextLink}
              {...linkToggle()}
              color={"white"}
              _hover={{ color: "blue.500" }}
              fontSize={["md", "xl"]}
            >
              {label}
            </Link>
          </Button>
        );
      })}
    </Wrap>
  );
};

export default Navbar;
