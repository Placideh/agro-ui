import React, { useState } from "react";
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

function generateRandomId(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const createData = (
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
    id: generateRandomId(),
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

const rows = [
  createData(
    "John Doe",
    "john@example.com",
    20,
    "Urea",
    200,
    50000,
    "Maize",
    10000,
    "Pending"
  ),
  createData(
    "Jane Smith",
    "jane@example.com",
    15,
    "NPK",
    150,
    40000,
    "Wheat",
    8000,
    "Approved"
  ),
  createData(
    "Alice Johnson",
    "alice@example.com",
    10,
    "DAP",
    100,
    30000,
    "Rice",
    6000,
    "Pending"
  ),
  createData(
    "Bob Brown",
    "bob@example.com",
    25,
    "Urea",
    250,
    70000,
    "Barley",
    12000,
    "Rejected"
  ),
  createData(
    "Carol White",
    "carol@example.com",
    30,
    "NPK",
    300,
    90000,
    "Soybean",
    15000,
    "Approved"
  ),
  createData(
    "David Lee",
    "david@example.com",
    22,
    "DAP",
    220,
    55000,
    "Corn",
    11000,
    "Rejected"
  ),
  createData(
    "Emily Taylor",
    "emily@example.com",
    18,
    "Urea",
    180,
    45000,
    "Oats",
    9000,
    "Pending"
  ),
  createData(
    "Frank Johnson",
    "frank@example.com",
    12,
    "NPK",
    120,
    35000,
    "Wheat",
    7000,
    "Approved"
  ),
  createData(
    "Grace Davis",
    "grace@example.com",
    28,
    "DAP",
    280,
    60000,
    "Soybean",
    13000,
    "Rejected"
  ),
  createData(
    "Henry Wilson",
    "henry@example.com",
    24,
    "Urea",
    240,
    65000,
    "Rice",
    12500,
    "Pending"
  ),
  createData(
    "Isabel Clark",
    "isabel@example.com",
    16,
    "NPK",
    160,
    42000,
    "Maize",
    8400,
    "Approved"
  ),
  createData(
    "Jack Thomas",
    "jack@example.com",
    14,
    "DAP",
    140,
    32000,
    "Barley",
    6400,
    "Rejected"
  ),
  createData(
    "Kelly Roberts",
    "kelly@example.com",
    26,
    "Urea",
    260,
    75000,
    "Soybean",
    14500,
    "Pending"
  ),
  createData(
    "Linda Evans",
    "linda@example.com",
    21,
    "NPK",
    210,
    55000,
    "Wheat",
    11000,
    "Approved"
  ),
  createData(
    "Michael Brown",
    "michael@example.com",
    17,
    "DAP",
    170,
    47000,
    "Corn",
    9400,
    "Rejected"
  ),
  createData(
    "Nancy Martinez",
    "nancy@example.com",
    29,
    "Urea",
    290,
    80000,
    "Oats",
    16000,
    "Pending"
  ),
  createData(
    "Olivia Garcia",
    "olivia@example.com",
    23,
    "NPK",
    230,
    62000,
    "Soybean",
    12400,
    "Approved"
  ),
  createData(
    "Peter Rodriguez",
    "peter@example.com",
    27,
    "DAP",
    270,
    70000,
    "Rice",
    14000,
    "Rejected"
  ),
  createData(
    "Quincy Hall",
    "quincy@example.com",
    19,
    "Urea",
    190,
    50000,
    "Maize",
    10000,
    "Pending"
  ),
  createData(
    "Rachel Harris",
    "rachel@example.com",
    13,
    "NPK",
    130,
    37000,
    "Wheat",
    7400,
    "Approved"
  ),
  createData(
    "Steven Wright",
    "steven@example.com",
    31,
    "DAP",
    310,
    85000,
    "Barley",
    17000,
    "Rejected"
  ),
  createData(
    "Tina Lopez",
    "tina@example.com",
    25,
    "Urea",
    250,
    70000,
    "Soybean",
    14000,
    "Pending"
  ),
  createData(
    "Uma Patel",
    "uma@example.com",
    32,
    "NPK",
    320,
    90000,
    "Rice",
    18000,
    "Approved"
  ),
  createData(
    "Victor Lee",
    "victor@example.com",
    33,
    "DAP",
    330,
    95000,
    "Corn",
    19000,
    "Rejected"
  ),
];

const TableList: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleAccept = (id: string) => {
    alert(`Accepted: ${id}`);
  };

  const handleCancel = (id: string) => {
    alert(`Accepted: ${id}`);
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
      <TableContainer>
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
                                Accept
                              </Button>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleCancel(row.id)}
                              >
                                Cancel
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
        rowsPerPageOptions={[5, 10, 25]}
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
