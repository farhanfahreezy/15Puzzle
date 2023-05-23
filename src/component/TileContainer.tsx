import { Grid, GridItem } from "@chakra-ui/react";
import Tile from "./Tile";

interface TCProps {
  tileArray: number[];
  switchTile: (idx: number, numChange: number) => void;
}

const TileContainer = ({ tileArray, switchTile }: TCProps) => {
  function evaluateClickable(id: number): number {
    // check left
    if (id !== 0 && id !== 4 && id !== 8 && id != 12) {
      if (tileArray[id - 1] === 16) {
        return -1;
      }
    }
    // check right
    if (id !== 3 && id !== 7 && id !== 11 && id != 15) {
      if (tileArray[id + 1] === 16) {
        return +1;
      }
    }
    // check up
    if (id > 3) {
      if (tileArray[id - 4] === 16) {
        return -4;
      }
    } // check bottom
    if (id < 12) {
      if (tileArray[id + 4] === 16) {
        return +4;
      }
    }
    return 0;
  }
  const row = Array.from([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="12px">
      {row.map((idx) => (
        <GridItem key={idx}>
          <Tile
            tileIdx={idx}
            tileNumber={tileArray[idx]}
            isMatched={tileArray[idx] === idx + 1}
            moveTo={evaluateClickable(idx)}
            switchTile={switchTile}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TileContainer;
