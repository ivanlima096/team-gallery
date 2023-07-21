import { useContext } from "react";
import { TeamsContext } from "../context/TeamsContext";

export default function useTeamGallery() {
  return useContext(TeamsContext)
}