import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {path: '/login', element: <LoginPage />},
  {path: '/', element: <HomePage />}
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router;