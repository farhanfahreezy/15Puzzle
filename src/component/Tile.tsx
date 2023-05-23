import { Button, Text } from "@chakra-ui/react";

interface TileProps {
  tileNumber: number;
  isMatched: boolean;
  isClickable: boolean;
}

const Tile = ({ tileNumber, isMatched, isClickable }: TileProps) => {
  const tileClickedAction = () => {
    if (isClickable) {
      console.log("Diklik");
    }
  };

  return (
    <Button
      w="116px"
      h="116px"
      bg={isMatched ? "#123456" : "#654321"}
      onClick={tileClickedAction}
    >
      <Text>{tileNumber}</Text>
    </Button>
  );
};

export default Tile;
