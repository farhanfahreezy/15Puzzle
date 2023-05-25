import { HStack, Link, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Text fontSize={45}>Move tiles in grid to order them from</Text>
      <HStack pb={5}>
        <Text fontWeight="bold" fontSize={45} mr="246px">
          1 to 15
        </Text>
        <Link
          href="https://github.com/farhanfahreezy/15Puzzle"
          target="_blank"
          _hover={{ color: "green.300" }}
        >
          <BsGithub size={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/farhanfahreezy/"
          target="_blank"
          _hover={{ color: "green.300" }}
          pl={5}
        >
          <BsLinkedin size={40} />
        </Link>
      </HStack>
    </>
  );
};

export default Footer;
