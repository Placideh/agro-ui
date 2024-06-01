import { Box, Paper } from "@mui/material";
import React from "react";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  return (
    <Box>
      <Paper component="form"></Paper>
    </Box>
  );
};

export default Home;
