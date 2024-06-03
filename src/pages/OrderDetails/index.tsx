import { Avatar, Box, Button, Grid, Paper } from "@mui/material";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import NavBar from "../../components/navbar";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Link } from "react-router-dom";

interface IOrderDetailProps {}

export const OrderDetail: React.FC<IOrderDetailProps> = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 660,
    margin: "80px auto",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
  };

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
      <Paper style={paperStyle}>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Avatar style={{ backgroundColor: "#4d426e" }}>
              <AcUnitIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <h2>Proceed Chekout </h2>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Avatar style={{ backgroundColor: "#4d426e" }}>
              <PaymentsIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <h2>Total Amount: </h2>
          </Grid>
          <Grid item>
            <h2>5000 Rwf </h2>
          </Grid>
        </Grid>
        <form noValidate>
          <Grid
            sx={{ m: -1 }}
            container
            alignItems="center"
            justifyContent="center"
            rowSpacing={-1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} container justifyContent="center">
              <h5>Farmer: </h5>
              <h5>Placide</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Email: </h5>
              <h5>Placide@gmail.com</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Land Size: </h5>
              <h5>2 Acre</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Seed:</h5>
              <h5>MAIZE</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Fertilizer:</h5>
              <h5>Lime</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Fertilizer Qty:</h5>
              <h5>3 Kg</h5>
            </Grid>

            <Grid item xs={6} container justifyContent="center">
              <h5>Fertilizer Price:</h5>
              <h5>3000 Rwf</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Seed Price:</h5>
              <h5>2000 Rwf</h5>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{ color: "#fff", backgroundColor: "red", m: 3 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/list"
                variant="contained"
                sx={{ color: "#fff", backgroundColor: "green", m: 3 }}
              >
                Proceed
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default OrderDetail;
