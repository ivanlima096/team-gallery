import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./Pages/RootLayout"
import Home from "./Pages/Home"
import TitlesLayout from "./Pages/Titles/TitlesLayout"
import ListTitles from "./Pages/Titles/ListTitles"
import CreateTitles from "./Pages/Titles/CreateTitles"
import ShowTitle from "./Pages/Titles/ShowTitle"
import UpdateTitle from "./Pages/Titles/UpdateTitle"

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <Home /> },
    {
      path: "titles", element: <TitlesLayout />,
      children: [
        { index: true, element: <ListTitles /> },
        { path: "new", element: <CreateTitles /> },
        { path: ":id", element: <ShowTitle /> },
        { path: ":id/update", element: <UpdateTitle /> },
      ]
    }
  ]
}])

export default router