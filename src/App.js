import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import SaintVani, {loader as courseSeriesLoader} from "./pages/saintVani";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        index: true, 
        element: <SaintVani />,
        loader: courseSeriesLoader
       }

    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
