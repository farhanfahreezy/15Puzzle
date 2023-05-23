import { useState, useEffect } from "react";
import { Container, Stack } from "@chakra-ui/react";
import MainWindow from "./component/MainWindow";

function App() {
  const [tileArray, setTileArray] = useState<number[]>(
    Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  );

  useEffect(() => {
    randomizeTile();
  }, []);

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
  }

  return (
    <>
      <Stack direction={"row"} h="100vh">
        <Container w="500px" h="100%">
          <MainWindow tileArray={tileArray} randomizeTile={randomizeTile} />
        </Container>
      </Stack>
    </>
  );
}

export default App;
