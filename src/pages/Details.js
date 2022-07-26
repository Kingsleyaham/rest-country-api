import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import PreviousButton from "../components/utils/PreviousButton";

const Details = () => {
  return (
    <Box fontSize="16px" paddingBottom={5}>
      <Container maxWidth="lg">
        <Box marginY={3} paddingY={5}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <PreviousButton />
          </Link>
        </Box>
        <Grid
          container
          spacing={5}
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6} xs={12}>
            <Box className="img-wrapper">
              <img
                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="country flag"
                height={350}
                width="90%"
                className="detail-img"
              ></img>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingBottom={4}>
              <Typography variant="h4" component="h3" fontWeight={800}>
                Belgium
              </Typography>
            </Box>
            <Grid container spacing={4}>
              <Grid item sm={6} xs={12}>
                <Box display="flex" alignItems="center" paddingY={0.7}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                    component="h6"
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Native Name:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                    component="p"
                    marginLeft={0.3}
                    lineHeight={1}
                  >
                    Belgie
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" paddingY={0.7}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                    component="h6"
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Population:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                    component="p"
                    marginLeft={0.3}
                    lineHeight={1}
                  >
                    113,145,11
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" paddingY={0.7}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                    component="h6"
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Region:
                  </Typography>
                  <Typography
                    variant="body1"
                    lineHeight={1}
                    color="text.secondary"
                    gutterBottom
                    component="p"
                    marginLeft={0.3}
                  >
                    Europe
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" paddingY={0.7}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                    component="h6"
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Sub Region:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                    component="p"
                    marginLeft={0.3}
                    lineHeight={1}
                  >
                    Western Europe
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" paddingY={0.7}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                    component="h6"
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Capital:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                    component="p"
                    marginLeft={0.3}
                    lineHeight={1}
                  >
                    Brussels
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box
                  display="flex"
                  alignItems="center"
                  paddingY={0}
                  lineHeight={1}
                >
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                    component="h6"
                    fontWeight={800}
                    lineHeight={1}
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
                    Be
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" paddingY={0.5}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                    component="h6"
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Currencies:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                    component="p"
                    marginLeft={0.3}
                    lineHeight={1}
                  >
                    Euro
                  </Typography>
                </Box>
                <Box display="flex" alignItems="baseline" paddingY={0.5}>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                    component="h6"
                    fontWeight={800}
                    lineHeight={1}
                  >
                    Language:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                    component="p"
                    marginLeft={0.3}
                    lineHeight={1}
                  >
                    Dutch, French, German
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={1} paddingTop={4}>
              <Grid item sm={4} xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    component="h6"
                    fontWeight={800}
                    marginRight={0.5}
                  >
                    Border Countries:
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Box display="flex" alignItems="center">
                  <Box marginX={0.3} paddingX={1.5} boxShadow={1}>
                    <Typography variant="body2">France</Typography>
                  </Box>

                  <Box marginX={0.3} paddingX={1.5} boxShadow={1}>
                    <Typography variant="body2">Germany</Typography>
                  </Box>

                  <Box marginX={0.3} paddingX={1.5} boxShadow={1}>
                    <Typography variant="body2">Netherlands</Typography>
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
