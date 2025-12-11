import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBat from "./components/NavBat";

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
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
