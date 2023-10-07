import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem bg="red" area={"nav"}>
        NAV
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="green">
          ASIDE
        </GridItem>
      </Show>
      <GridItem bg="gold" area={"main"}>
        MAIN
      </GridItem>
    </Grid>
  );
}

export default App;
