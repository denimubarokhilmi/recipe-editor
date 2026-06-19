import { memo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface Lable {
  label: string;
}

const LoadingSpinner = memo(({ label }: Lable) => (
  <Box
    className=" m-0 p-0"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <CircularProgress></CircularProgress>
    <Typography>{label}</Typography>
  </Box>
));

export default LoadingSpinner;
