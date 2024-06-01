import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";
import TableList from "./pages/list";

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
    path: "/itemStatus",
    element: <div>Item-Details</div>,
    errorElement: <Error />,
  },
]);
