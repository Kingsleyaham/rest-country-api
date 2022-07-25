import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DarkModeIcon from "@mui/icons-material/NightsStayOutlined";

const darkImageStyle = {
  fontWeight: 600,
};

const Header = () => {
  return (
    <Box sx={{ py: "1em", boxShadow: "2", backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <h3>Where in the World?</h3>
          </Grid>
          <Grid item>
            <DarkModeIcon />
            <span style={darkImageStyle}>Dark Mode</span>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
