import React from "react";
import { Genre } from "../hooks/useGenre";
import { List, ListItem, Image, Button, HStack } from "@chakra-ui/react";
import imgCropper from "../services/img-cropper";

interface GenreProps {
  genres: Genre;
  onClickGenre: (gen: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreItem = ({ genres, onClickGenre, selectedGenre }: GenreProps) => {
  return (
    <List paddingY="5px">
      <ListItem fontSize="lg">
        <HStack>
          <Image
            src={imgCropper(genres.image_background)}
            boxSize="32px"
            borderRadius={8}
          />
          <Button
            fontWeight={
              genres.id === selectedGenre?.id ? "extrabold" : "normal"
            }
            // color={genres.id === selectedGenre?.id ? "yellow" : "white"}
            onClick={() => onClickGenre(genres)}
            variant="link"
          >
            {genres.name}
          </Button>
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreItem;
