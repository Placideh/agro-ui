import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import NavBar from "../../components/navbar";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

interface IOrderDetailProps {}

export const OrderDetail: React.FC<IOrderDetailProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const orderDetails = location.state?.data;
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 660,
    margin: "80px auto",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
  };

  const handleClick = async (orderId: string) => {
    setLoading(true);
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    await axios
      .patch(`${serverUrl}/order/${orderId}`, { status: "pending" })
      .then((res) => {
        if (res.status === 201) {
          navigate("/list");
        }
      })
      .catch((err) => {
        console.log("ERROR FROM SERVER:", err);
      })
      .finally(() => {
        setLoading(false);
      });
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
            <h2>{orderDetails.amount} Rwf </h2>
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
              <h5>{orderDetails.farmerName}</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Email: </h5>
              <h5>{orderDetails.farmerEmail}</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Land Size: </h5>
              <h5>{orderDetails.landSize} Acre</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Seed:</h5>
              <h5>{orderDetails.seed.name}</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Fertilizer:</h5>
              <h5>{orderDetails.seed.fertilizer.name}</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Fertilizer Qty:</h5>
              <h5>{orderDetails!.fertilizerQuantity} Kg</h5>
            </Grid>

            <Grid item xs={6} container justifyContent="center">
              <h5>Fertilizer Price:</h5>
              <h5>{orderDetails.seed.fertilizer.price} Rwf</h5>
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <h5>Seed Price:</h5>
              <h5>{orderDetails.seed.price} Rwf</h5>
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
              {loading && <CircularProgress color="secondary" />}

              <Button
                component={Link}
                to="/list"
                variant="contained"
                sx={{ color: "#fff", backgroundColor: "green", m: 3 }}
                onClick={() => handleClick(orderDetails.id)}
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
