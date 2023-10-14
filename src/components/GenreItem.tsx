import React from "react";
import { Genre } from "../hooks/useGenre";
import { List, ListItem, Image, Text, HStack } from "@chakra-ui/react";
import imgCropper from "../services/img-cropper";

interface GenreProps {
  genres: Genre;
}
const GenreItem = ({ genres }: GenreProps) => {
  return (
    <List paddingY="5px">
      <ListItem fontSize="lg">
        <HStack>
          <Image
            src={imgCropper(genres.image_background)}
            boxSize="32px"
            borderRadius={8}
          />
          <Text>{genres.name}</Text>
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreItem;
