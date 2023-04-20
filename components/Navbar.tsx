import { Link, Button, Wrap } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Wrap spacing="4px">
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        <Button>About</Button>
      </Link>
      <Link href="/works" color="blue.400" _hover={{ color: "blue.500" }}>
        <Button>works</Button>
      </Link>
      <Link href="/contact" color="blue.400" _hover={{ color: "blue.500" }}>
        <Button>Contact</Button>
      </Link>
    </Wrap>
  );
};

export default Navbar;
