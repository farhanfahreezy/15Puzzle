import { Container, Stack } from "@chakra-ui/react";
import MainWindow from "./component/MainWindow";

function App() {
  return (
    <>
      <Stack direction={"row"} h="100vh">
        {/* <Show above="md">
          <Container w="calc((100vw - 500px) / 2)" h="100%">
            <Background />
          </Container>
        </Show> */}
        <Container w="500px" h="100%">
          <MainWindow />
        </Container>
        {/* <Show above="md">
          <Container w="calc(500px)" h="100%">
            <Background />
          </Container>
        </Show> */}
      </Stack>
    </>
  );
}

export default App;
