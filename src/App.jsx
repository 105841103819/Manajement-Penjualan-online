import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddPage from "./pages/AddPage"
import UpdatePage from "./pages/UpdatePage"
import RootLayout from "./pages/RooLayout"
import HomePage from "./pages/HomePage"
import Login from "./pages/LoginPage"
import AdminRoute from "./components/AdminRoute"
import Root from "./pages/Root"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <AdminRoute><RootLayout /></AdminRoute>,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "add",
              element: <AddPage />,
            },
            {
              path: "update/:id",
              element: <UpdatePage />,
            },
          ],
        }
        /*children:[
          {
          path: "dashboard",
          element: <RootLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "add",
              element: <AddPage />,
            },
            {
              path: "update/:id",
              element: <UpdatePage />,
            },
          ],
        },

        
        ]*/

      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
