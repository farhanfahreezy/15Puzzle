import { VStack } from "@chakra-ui/react";
import TileContainer from "./TileContainer";
import Header from "./Header";
import Footer from "./Footer";

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
        <Header
          randomizeTile={randomizeTile}
          numOfClicked={numOfClicked}
          timer={timer}
          isTimerStarted={isTimerStarted}
          setIsTimerStarted={setIsTimerStarted}
        />

        <TileContainer tileArray={tileArray} switchTile={switchTile} />
        <Footer />
      </VStack>
    </>
  );
};

export default MainWindow;
