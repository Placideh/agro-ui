import React, { useEffect, useState } from "react";
import {
  TablePagination,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Button,
} from "@mui/material";
import NavBar from "../../components/navbar";
import axios from "axios";

interface Column {
  id: keyof Data | "actions";
  label: string;
  minWidth?: number;
  align?: "right";
}

interface Data {
  id: string;
  name: string;
  email: string;
  size: number;
  fertilizer: string;
  qty: number;
  price: number;
  seed: string;
  seedPrice: number;
  status: string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "name", label: "Farmer Name", minWidth: 130 },
  { id: "email", label: "Farmer Email", minWidth: 150 },
  { id: "size", label: "Land Size\u00a0(acre)", minWidth: 110, align: "right" },
  { id: "fertilizer", label: "Fertilizer", minWidth: 120, align: "right" },
  {
    id: "qty",
    label: "Fertilizer Qty\u00a0(kg)",
    minWidth: 120,
    align: "right",
  },
  {
    id: "price",
    label: "Fertilizer Price(Rwf)",
    minWidth: 100,
    align: "right",
  },
  { id: "seed", label: "Seed", minWidth: 120, align: "right" },
  { id: "seedPrice", label: "Seed price(Rwf)", minWidth: 140, align: "right" },
  { id: "status", label: "Status", minWidth: 140, align: "right" },
  { id: "actions", label: "Actions", minWidth: 130, align: "right" },
];

const createData = (
  id: string,
  name: string,
  email: string,
  size: number,
  fertilizer: string,
  qty: number,
  price: number,
  seed: string,
  seedPrice: number,
  status: string
): Data => {
  return {
    id,
    name,
    email,
    size,
    fertilizer,
    qty,
    price,
    seed,
    seedPrice,
    status,
  };
};

interface ISeed {
  id: string;
  name: string;
  price: number;
  description: string;
  fertilizer: IFertilizer;
}

interface IFertilizer {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface IOrder {
  id: string;
  amount: number;
  landSize: number;
  fertilizerQuantity: number;
  seedQuantity: number;
  paymentMethod: string;
  farmerName: string;
  farmerEmail: string;
  seed: ISeed;
  status: string;
}

const TableList: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState<Data[]>([]);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const getAllOrders = () => {
    if (serverUrl !== undefined) {
      axios
        .get(`${serverUrl}/order/paginate`)
        .then((res) => {
          const newRows = res.data.data.map((order: IOrder) =>
            createData(
              order.id,
              order.farmerName,
              order.farmerEmail,
              order.landSize,
              order.seed.fertilizer.name,
              order.fertilizerQuantity,
              order.seed.fertilizer.price,
              order.seed.name,
              order.seed.price,
              order.status
            )
          );
          setRows(newRows);
        })
        .catch((err) => {
          console.log("ERROR FROM SERVER:", err);
        });
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const updateOrder = async (orderId: string, status: string) => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    await axios
      .patch(`${serverUrl}/order/${orderId}`, { status })
      .then((res) => {
        if (res.status === 200) {
          getAllOrders();
        }
      })
      .catch((err) => {
        console.log("ERROR FROM SERVER:", err);
      });
  };

  const handleAccept = async (orderId: string) => {
    await updateOrder(orderId, "approved");
  };

  const handleCancel = async (orderId: string) => {
    await updateOrder(orderId, "rejected");
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <NavBar />
      <TableContainer sx={{ mt: 8 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      if (column.id === "actions") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "10px",
                              }}
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleAccept(row.id)}
                              >
                                Approve
                              </Button>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleCancel(row.id)}
                              >
                                Reject
                              </Button>
                            </div>
                          </TableCell>
                        );
                      }
                      const value = row[column.id as keyof Data];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableList;
