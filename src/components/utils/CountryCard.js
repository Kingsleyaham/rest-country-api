import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CountryCard = () => {
  return (
    <Grid item md={3} sm={6} marginTop={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              Germany
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle2"
                color="text.primary"
                component="p"
              >
                Population:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="p"
                marginLeft={0.3}
              >
                120,00,556
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle2"
                color="text.primary"
                component="p"
              >
                Region:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="p"
                marginLeft={0.3}
              >
                Europe
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle2"
                color="text.primary"
                component="p"
              >
                Country:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="p"
                marginLeft={0.3}
              >
                Berlin
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CountryCard;
