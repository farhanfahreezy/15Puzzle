import { Button, Text } from "@chakra-ui/react";

interface TileProps {
  tileNumber: number;
  isMatched: boolean;
  isClickable: boolean;
}

const Tile = ({ tileNumber, isMatched, isClickable }: TileProps) => {
  const tileClickedAction = () => {
    if (isClickable && tileNumber !== 16) {
      console.log("Diklik");
    }
  };

  return (
    <Button
      w="116px"
      h="116px"
      bg={tileNumber === 16 ? "#33615B" : isMatched ? "#D1954F" : "#81E6D9"}
      _hover={{ filter: "brightness(90%)", transform: "scale(0.98)" }}
      colorScheme={isMatched ? "#D1954F" : "#4FD1C5"}
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
