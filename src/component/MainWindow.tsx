import {
  Button,
  HStack,
  Spacer,
  Text,
  VStack,
  Divider,
  Image,
} from "@chakra-ui/react";
import TileContainer from "./TileContainer";
import logo from "../assets/logo.png";
import { AiOutlineReload } from "react-icons/ai";

interface MWProps {
  tileArray: number[];
  randomizeTile: () => void;
  switchTile: (idx: number, numChange: number) => void;
  numOfClicked: number;
  timer: number;
  isTimerStarted: boolean;
  setIsTimerStarted: () => void;
}

const MainWindow = ({
  tileArray,
  randomizeTile,
  switchTile,
  numOfClicked,
  timer,
  isTimerStarted,
  setIsTimerStarted,
}: MWProps) => {
  return (
    <>
      <VStack w="100%" h="100%" paddingX={0}>
        {/* <Text fontSize="50px" fontWeight="bold">
          15 Puzzle
        </Text> */}
        <Image src={logo} alt="Dan Abramov" w="300px" py={5} />
        <HStack justifyContent="space-between" w="100%" paddingBottom={3}>
          <Button
            onClick={randomizeTile}
            colorScheme="teal"
            variant="outline"
            border="2px"
            borderRadius="10px"
          >
            <AiOutlineReload />
          </Button>
          <Spacer />
          <HStack bg="teal.500" w="260px" h="44px" borderRadius="10px">
            <Text paddingLeft={3}>Step</Text>
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
            <Text paddingLeft={0.5}>Time</Text>
            <Text
              align="center"
              w="56px"
              bg="teal.800"
              borderRadius="5px"
              px="10px"
            >
              {timer}
            </Text>
            <Text>s</Text>
          </HStack>
        </HStack>
        <TileContainer tileArray={tileArray} switchTile={switchTile} />
        <Button
          colorScheme="teal"
          variant="outline"
          border="2px"
          w="100%"
          paddingY={6}
          borderRadius="10px"
          onClick={setIsTimerStarted}
        >
          {isTimerStarted ? "Pause" : "Start"}
        </Button>
      </VStack>
    </>
  );
};

export default MainWindow;
