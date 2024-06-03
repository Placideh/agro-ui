import { Box } from "@mui/material";
import React from "react";
import NavBar from "../../components/navbar";
import AppForm from "../../components/form";

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#4d426e",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "#fff",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <NavBar />
      <AppForm />
    </Box>
  );
};

export default Home;
