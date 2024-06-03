import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

interface INavBarProps {}
const navItems = ["Home"];

export const NavBar: React.FC<INavBarProps> = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ color: "#4d426e", backgroundColor: "#fff" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            AGRO STORE
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#4d426e" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
