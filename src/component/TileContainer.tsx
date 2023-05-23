import { Grid, GridItem } from "@chakra-ui/react";
import Tile from "./Tile";

interface TCProps {
  tileArray: number[];
}

const TileContainer = ({ tileArray }: TCProps) => {
  const row = Array.from([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="12px">
      {tileArray.map((idx) => (
        <GridItem key={idx}>
          <Tile
            tileNumber={tileArray[idx - 1]}
            isMatched={tileArray[idx - 1] === idx}
            isClickable={true}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TileContainer;
