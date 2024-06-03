import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useForm } from "react-hook-form";
import axios from "axios";

interface IFormValues {
  farmerEmail: string;
  farmerName: string;
  seedId: string;
  landSize: number;
}

interface ISeed {
  id: string;
  name: string;
}

export const AppForm: React.FC = () => {
  const [seeds, setSeeds] = useState<ISeed[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    fetchSeeds();
  }, []);

  const fetchSeeds = async () => {
    try {
      // console.log(`${process.env.REACT_APP_SERVER_URL}`);
      const response = await axios.get(
        `https://agro-input.onrender.com/seed/all`
      );
      console.log(response.data.data);
      setSeeds(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedItem(event.target.value as string);
  };
  const form = useForm<IFormValues>({
    defaultValues: {
      farmerName: "",
      farmerEmail: "",
      seedId: "",
      landSize: 0,
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: IFormValues) => {
    console.log("DATA SEND:", data);
    data.seedId = selectedItem;
    await axios
      .post(`https://agro-input.onrender.com/order`, { data })
      .then((res) => {
        console.log("RESPONSE FROM SERVER:", res.data);
      })
      .catch((err) => {
        console.log("ERROR FROM SERVER:", err);
      });
    console.log(data);
  };
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
    <Box>
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
            <h2>Request Fertilizer</h2>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid
            sx={{ m: 3 }}
            container
            alignItems="center"
            justifyContent="center"
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} container justifyContent="center">
              <TextField
                required
                id="outlined-required"
                label="Farmer Name"
                {...register("farmerName", { required: "Provide Name" })}
                fullWidth
                error={!!errors.farmerName}
                helperText={errors.farmerName?.message}
              />
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <TextField
                required
                id="outlined-required"
                label="Farmer Email"
                {...register("farmerEmail", { required: "Provide Email" })}
                type="email"
                fullWidth
                error={!!errors.farmerEmail}
                helperText={errors.farmerEmail?.message}
              />
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <TextField
                required
                type="number"
                id="outlined-required"
                label="Land Size"
                {...register("landSize", { required: "Provide Land Size" })}
                fullWidth
                error={!!errors.landSize}
                helperText={errors.landSize?.message}
              />
            </Grid>
            <Grid item xs={6} container justifyContent="center">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Seed</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedItem}
                  onChange={handleChange}
                  label="seed"
                >
                  {Array.isArray(seeds) &&
                    seeds.map((seed) => (
                      <MenuItem key={seed.id} value={seed.id}>
                        {seed.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{ color: "#fff", backgroundColor: "#4d426e", m: 3 }}
              type="submit"
            >
              Place the Order
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AppForm;
