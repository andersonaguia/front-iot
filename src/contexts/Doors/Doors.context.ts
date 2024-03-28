import { createContext } from "react";
import { DoorsInterfaces } from "./Doors.interfaces";

export const DoorsContext = createContext<DoorsInterfaces>({
  handleFindAllDoors: () => Promise.resolve(),
  handleAccessDoors: () => Promise.resolve(),
  doors: [],
});
