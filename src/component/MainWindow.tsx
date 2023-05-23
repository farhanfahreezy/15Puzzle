import {
  Button,
  HStack,
  Spacer,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import TileContainer from "./TileContainer";

interface MWProps {
  tileArray: number[];
  randomizeTile: () => void;
  switchTile: (idx: number, numChange: number) => void;
  numOfClicked: number;
  timer: number;
}

const MainWindow = ({
  tileArray,
  randomizeTile,
  switchTile,
  numOfClicked,
  timer,
}: MWProps) => {
  return (
    <>
      <VStack w="500px" h="100%">
        <Text fontSize="50px" fontWeight="bold">
          15 Puzzle
        </Text>
        <HStack justifyContent="space-between" w="100%" paddingBottom={3}>
          <Button
            onClick={randomizeTile}
            colorScheme="teal"
            variant="outline"
            border="2px"
            paddingX={8}
            paddingY={5}
            borderRadius="10px"
          >
            New Game
          </Button>
          <Spacer />
          <HStack bg="teal.500" paddingY={2.5} paddingX={8} borderRadius="10px">
            <Text>Step:</Text>
            <Text>{numOfClicked}</Text>
            <Divider borderWidth={2} color="teal.500" />
            <Text>Time:</Text>
            <Text>{timer}s</Text>
          </HStack>
        </HStack>
        <TileContainer tileArray={tileArray} switchTile={switchTile} />
      </VStack>
    </>
  );
};

export default MainWindow;
