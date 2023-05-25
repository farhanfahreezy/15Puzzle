import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import MainWindow from "./component/MainWindow";

function App() {
  const [tileArray, setTileArray] = useState<number[]>(
    Array.from([1, 2, 3, 4, 5, 6, 7, 16, 9, 10, 11, 8, 13, 14, 15, 12])
  );
  const [numOfClicked, setNumOfClicked] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTimerStarted && timer <= 9999) {
        setTimer((prevTimer) => prevTimer + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerStarted]);

  useEffect(() => {
    if (isFinished) {
      setIsTimerStarted(false);
    }
  }, [isFinished]);

  useEffect(() => {
    randomizeTile();
  }, []);

  useEffect(() => {
    checkFinished();
  }, [tileArray]);

  function randomizeTile() {
    const shuffledArray = tileArray.slice();

    do {
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [
          shuffledArray[randomIndex],
          shuffledArray[i],
        ];
      }
    } while (isSolveable(shuffledArray) == 1);

    setTileArray(shuffledArray);
    setNumOfClicked(0);
    setIsTimerStarted(false);
    setTimer(0);
  }

  function isSolveable(array: number[]) {
    let count = 1;
    for (let i = 0; i < 16; i++) {
      if (array[i] === 16) {
        if (i % 2 === 0) {
          count = 0;
        }
      }
    }
    for (let i = 0; i < 15; i++) {
      for (let j = i + 1; j < 16; j++) {
        if (array[j] < array[i]) {
          count++;
        }
      }
    }

    return count % 2;
  }

  const switchTile = (idx: number, numChange: number) => {
    const newArray = tileArray.slice();
    [newArray[idx], newArray[idx + numChange]] = [
      newArray[idx + numChange],
      newArray[idx],
    ];
    setTileArray(newArray);
    setNumOfClicked(numOfClicked + 1);
    setIsTimerStarted(true);
  };

  const checkFinished = () => {
    let finished = true;
    for (let i = 0; i < 16; i++) {
      if (tileArray[i] !== i + 1) {
        finished = false;
      }
    }
    setIsFinished(finished);
  };

  const chageTimer = () => {
    setIsTimerStarted(!isTimerStarted);
  };

  const reset = () => {
    setIsFinished(false);
    setTimer(0);
    setNumOfClicked(0);
    setIsTimerStarted(false);
    randomizeTile();
  };

  return (
    <>
      <Stack direction={"row"} h="100vh" justifyContent="center">
        <Container w="532px" h="100%">
          <MainWindow
            tileArray={tileArray}
            randomizeTile={randomizeTile}
            switchTile={switchTile}
            numOfClicked={numOfClicked}
            timer={timer}
            isTimerStarted={isTimerStarted}
            setIsTimerStarted={chageTimer}
          />
        </Container>
      </Stack>
      <Modal
        blockScrollOnMount={false}
        isOpen={isFinished}
        onClose={reset}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent>
          <ModalHeader>Congratulations!</ModalHeader>
          <ModalBody>
            <Text>Step : {numOfClicked}</Text>
            <Text>Time : {timer}s</Text>
          </ModalBody>

          <ModalFooter>
            <Link
              href="https://github.com/farhanfahreezy/15Puzzle"
              target="_blank"
            >
              <Button colorScheme="blue" mr={3}>
                Visit Our Github
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
