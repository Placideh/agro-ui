import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";
import TableList from "./pages/table";
import OrderDetail from "./pages/OrderDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/list",
    element: <TableList />,
    errorElement: <Error />,
  },
  {
    path: "/orderDetails",
    element: <OrderDetail />,
    errorElement: <Error />,
  },
]);
