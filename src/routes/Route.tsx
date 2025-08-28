import App from "@/App";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <div>
            <Users></Users>
          </div>
        ),
      },
    ],
  },
]);
