import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CountryCard from "../components/utils/CountryCard";
import SearchFilterBar from "../components/SearchFilterBar";

const Home = () => {
  return (
    <Box paddingBottom={5}>
      <Container maxWidth="lg">
        <SearchFilterBar />
        <Grid container spacing={7} display="flex" justifyContent="center">
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
