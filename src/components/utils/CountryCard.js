import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  let navigate = useNavigate();

  const redirectUser = (page) => navigate(`/${page}`);

  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={6}
      marginTop={3}
      onClick={() => redirectUser(props.countryName)}
    >
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="140" image={props.flag} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {props.countryName}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="text.primary"
                component="p"
              >
                Population:
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="text.secondary"
                component="p"
                marginLeft={0.5}
              >
                {props.population.toLocaleString()}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="text.primary"
                component="p"
              >
                Region:
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="text.secondary"
                component="p"
                marginLeft={0.5}
              >
                {props.region}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "baseline" }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="text.primary"
                component="p"
              >
                Capital:
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="text.secondary"
                component="p"
                marginLeft={0.5}
              >
                {props.capital}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CountryCard;
