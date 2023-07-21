import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./Pages/RootLayout"
import Home from "./Pages/Home"
import TeamsLayout from "./Pages/Teams/TeamsLayout"
import ListTeams from "./Pages/Teams/ListTeam"
import CreateTeams from "./Pages/Teams/CreateTeams"
import ShowTeam from "./Pages/Teams/ShowTeam"
import UpdateTeam from "./Pages/Teams/UpdateTeams"

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <Home /> },
    {
      path: "teams", element: <TeamsLayout />,
      children: [
        { index: true, element: <ListTeams /> },
        { path: "new", element: <CreateTeams /> },
        { path: ":id", element: <ShowTeam /> },
        { path: ":id/update", element: <UpdateTeam /> },
      ]
    }
  ]
}])

export default router