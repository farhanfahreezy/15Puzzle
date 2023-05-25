import { HStack, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });
  return (
    <>
      <Text fontSize={currentBreakpoint === "md" ? 45 : 35}>
        Move tiles in grid to order them from
      </Text>
      <HStack pb={5}>
        <Text
          fontWeight="bold"
          fontSize={currentBreakpoint === "md" ? 45 : 35}
          mr={currentBreakpoint === "md" ? "246px" : "165px"}
        >
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
