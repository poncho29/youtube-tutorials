import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { ErrorPage } from "../ErrorPage";

// Pages
import { TodoApp } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todo-app",
        element: <TodoApp />,
      },
    ],
  },
]);