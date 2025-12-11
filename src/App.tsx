import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBat from "./components/NavBat";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBat />
        </GridItem>
        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>
        <GridItem area="main">
          <GameGrid /> 
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
