import { Link, Button, Wrap } from "@chakra-ui/react";

type NavItem = {
  key?: string | number;
  label: string;
  linkTo: string;
};

const Navbar = ({ navItems }: { navItems: NavItem[] | [] }) => {
  return (
    <Wrap spacing="4px">
      {navItems.map(({ linkTo, label, key }) => {
        let linkToogle = () => (linkTo ? { href: linkTo } : {});
        return (
          <Button key={key || label}>
            <Link
              {...linkToogle()}
              color="blue.400"
              _hover={{ color: "blue.500" }}
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
