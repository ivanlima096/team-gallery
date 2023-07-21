import { TeamsContextProvider } from "./context/TeamsContext";
import router from "./router";
import { RouterProvider } from "react-router-dom"

export default function App() {
  return (
    <TeamsContextProvider>
      <RouterProvider router={router} />
    </TeamsContextProvider>
  )
}