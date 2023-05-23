import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import MainWindow from "./component/MainWindow";

function App() {
  const [tileArray, setTileArray] = useState<number[]>(
    Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  );
  const [numOfClicked, setNumOfClicked] = useState(0);
  const [timer, setTimer] = useState<number>(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTimerStarted) {
        setTimer((prevTimer) => prevTimer + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerStarted]);

  useEffect(() => {
    randomizeTile();
  }, []);

  useEffect(() => {
    checkFinished();
  }, [tileArray]);

  function randomizeTile() {
    const shuffledArray = tileArray.slice();

    setTileArray([]);

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i],
      ];
    }
    setTileArray(shuffledArray);
    setNumOfClicked(0);
    setIsTimerStarted(false);
    setTimer(0);
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
    tileArray.map((index, number) => {
      if (index !== number) {
        finished = false;
      }
    });
    setIsFinished(finished);
    onOpenModal();
  };

  return (
    <>
      <Stack direction={"row"} h="100vh">
        <Container w="500px" h="100%">
          <MainWindow
            tileArray={tileArray}
            randomizeTile={randomizeTile}
            switchTile={switchTile}
            numOfClicked={numOfClicked}
            timer={timer}
          />
        </Container>
      </Stack>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpenModal}
        onClose={onCloseModal}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent>
          <ModalHeader>Thank you for using this web-app!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Hey there! So, this website is still in its development phase, but
            fear not, updates are coming your way! ...Well, at least that's the
            plan. Let's hope for the best, shall we?
          </ModalBody>

          <ModalFooter>
            <Link
              href="https://github.com/farhanfahreezy/Tubes3_13521058"
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
