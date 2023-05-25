import { Button, Text } from "@chakra-ui/react";

interface TileProps {
  tileIdx: number;
  tileNumber: number;
  isMatched: boolean;
  moveTo: number;
  switchTile: (idx: number, numChange: number) => void;
}

const Tile = ({
  tileIdx,
  tileNumber,
  isMatched,
  moveTo,
  switchTile,
}: TileProps) => {
  const tileClickedAction = () => {
    if (moveTo !== 0 && tileNumber !== 16) {
      switchTile(tileIdx, moveTo);
    }
  };

  return (
    <Button
      w="116px"
      h="116px"
      bg={tileNumber === 16 ? "#33615B" : isMatched ? "yellow.500" : "teal.200"}
      _hover={{ filter: "brightness(90%)", transform: "scale(0.98)" }}
      _active={{ transform: "scale(0.96)" }}
      onClick={tileClickedAction}
      borderRadius="13px"
    >
      <Text fontSize={48} color="#FFFFFF">
        {tileNumber !== 16 && tileNumber}
      </Text>
    </Button>
  );
};

export default Tile;
