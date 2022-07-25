import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import PreviousButton from "../components/utils/PreviousButton";

const Details = () => {
  return (
    <Box fontSize="16px">
      <Container maxWidth="lg">
        <Box marginY={5} paddingY={5}>
          <Link to="/">
            <PreviousButton />
          </Link>
        </Box>
        <Grid
          container
          spacing={12}
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6} xs={12}>
            <Box>
              <img
                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="country flag"
                height={400}
                width="100%"
              ></img>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingY={3}>
              <Typography variant="h4" component="h3" fontWeight={800}>
                Belgium
              </Typography>
            </Box>
            <Grid container>
              <Grid item sm={12}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center" paddingY={0.5}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      component="h6"
                      fontWeight={800}
                    >
                      Native Name:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                    >
                      Belgie
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      color="text.primary"
                      component="h6"
                      fontWeight={800}
                    >
                      Top Level Domain:
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                      component="p"
                      marginLeft={0.3}
                    >
                      be
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Details;
