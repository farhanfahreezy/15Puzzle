import {
  Button,
  HStack,
  Spacer,
  Text,
  Divider,
  Image,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { TbReload } from "react-icons/tb";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

interface HeaderProps {
  randomizeTile: () => void;
  numOfClicked: number;
  timer: number;
  isTimerStarted: boolean;
  setIsTimerStarted: () => void;
}

const Header = ({
  randomizeTile,
  numOfClicked,
  timer,
  isTimerStarted,
  setIsTimerStarted,
}: HeaderProps) => {
  const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });
  return (
    <>
      <Image src={logo} alt="15 Puzzle by Farhan" w="300px" py={5} />
      <Stack
        direction={currentBreakpoint === "md" ? "row" : "column"}
        justifyContent="space-between"
        w="100%"
        paddingBottom={3}
      >
        <HStack>
          <Button
            onClick={randomizeTile}
            colorScheme="teal"
            variant="solid"
            borderRadius="10px"
            h="44px"
            w="44px"
            padding={0}
            color="teal.800"
          >
            <TbReload size={26} />
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            borderRadius="10px"
            h="44px"
            w="44px"
            onClick={setIsTimerStarted}
            padding={0}
            color="teal.800"
          >
            {isTimerStarted ? (
              <BsFillPauseFill size={30} />
            ) : (
              <BsFillPlayFill size={30} />
            )}
          </Button>
        </HStack>

        <Spacer />
        <HStack bg="teal.500" w="256px" h="44px" borderRadius="10px">
          <Text paddingLeft={4} fontWeight="bold">
            Step
          </Text>
          <Text
            w="56px"
            bg="teal.800"
            borderRadius="5px"
            px="10px"
            align="center"
          >
            {numOfClicked}
          </Text>
          <Divider
            orientation="vertical"
            color="teal.500"
            h="39px"
            borderWidth={3}
          />
          <Text paddingLeft={0.5} fontWeight="bold">
            Time
          </Text>
          <Text
            align="center"
            w="56px"
            bg="teal.800"
            borderRadius="5px"
            px="10px"
          >
            {timer}
          </Text>
        </HStack>
      </Stack>
    </>
  );
};

export default Header;
