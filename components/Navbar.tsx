import { Link, Button, Wrap } from "@chakra-ui/react";

type NavItem = {
  key?: string | number;
  label: string;
  linkTo: string;
};

const Navbar = ({ navItems }: { navItems: NavItem[] | []; }) => {
  return (
    <Wrap spacing="4px">
      {navItems.map(({ linkTo, label }) => (
        <Link href={linkTo} color="blue.400" _hover={{ color: "blue.500" }}>
          <Button>{label}</Button>
        </Link>
      ))}
    </Wrap>
  );
};

export default Navbar;
