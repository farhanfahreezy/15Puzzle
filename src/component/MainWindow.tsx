import {
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import TileContainer from "./TileContainer";

interface MWProps {
  tileArray: number[];
  randomizeTile: () => void;
}

const MainWindow = ({ tileArray, randomizeTile }: MWProps) => {
  return (
    <>
      <VStack w="500px" h="100%">
        <Heading>15 Puzzle</Heading>
        <Text>Main</Text>
        <HStack justifyContent="space-between" w="100%" paddingBottom={3}>
          <Button onClick={randomizeTile}>New Game</Button>
          <Spacer />
          <ButtonGroup isAttached>
            <Button>A</Button>
            <Button>B</Button>
          </ButtonGroup>
        </HStack>
        <TileContainer tileArray={tileArray} />
      </VStack>
    </>
  );
};

export default MainWindow;
