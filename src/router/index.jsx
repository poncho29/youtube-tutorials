import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
import { RootLayout } from "../layouts";

// Root Pages
// import { App } from "../App";
import { ErrorPage } from "../ErrorPage";

// Internal Pages 
import { StepsForm, TodoApp } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/todo-app" />,
        // element: <App />,
      },
      {
        path: "todo-app",
        element: <TodoApp />,
      },
      {
        path: "steps-form",
        element: <StepsForm />,
      },
    ],
  },
]);