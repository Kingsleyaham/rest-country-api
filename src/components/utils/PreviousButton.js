import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const PreviousButton = () => {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#fff",
          color: "hsl(200, 15%, 8%)",
          boxShadow: "4",
          "&:hover": {
            backgroundColor: "#f6f6f6",
          },
        }}
      >
        <Box paddingX={2} display="flex">
          <KeyboardBackspaceIcon />
          <Typography
            variant="subtitle2"
            color="text.primary"
            component="p"
            paddingLeft={0.5}
          >
            Back
          </Typography>
        </Box>
      </Button>
    </>
  );
};

export default PreviousButton;
