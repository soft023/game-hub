import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface GenreSkel {
  children: ReactNode;
}

const GenreSkeleton = ({ children }: GenreSkel) => {
  return (
    <List paddingY="10px">
      <ListItem fontSize="lg">
        <HStack>
          <Skeleton boxSize="32px" borderRadius={8} />
          <SkeletonText>{children}</SkeletonText>
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
