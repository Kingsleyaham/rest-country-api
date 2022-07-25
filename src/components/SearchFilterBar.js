import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchFilterBar = () => {
  return (
    <Grid
      container
      spacing={4}
      marginTop={2}
      marginBottom={3}
      direction="row"
      display="flex"
      justifyContent="space-between"
    >
      <Grid item>
        <FormControl
          sx={{
            boxShadow: "1",
            maxWith: "400px",
            minWidth: "350px",
            backgroundColor: "#fff",
          }}
        >
          <TextField
            id="Search"
            placeholder="Search for a country..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            aria-describedby="search bar"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl
          sx={{
            boxShadow: "1",
            maxWidth: "300px",
            minWidth: "220px",
            backgroundColor: "#fff",
          }}
        >
          <Select
            defaultValue="filter"
            labelId="demo-select-small"
            id="demo-select-small"
          >
            <MenuItem value="filter">Filter By Region</MenuItem>
            <MenuItem value="africa">Africa</MenuItem>
            <MenuItem value="america">America</MenuItem>
            <MenuItem value="asia">Asia</MenuItem>
            <MenuItem value="europe">Europe</MenuItem>
            <MenuItem value="oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchFilterBar;
