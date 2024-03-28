import { useContext } from "react";
import { DoorsContext } from "./Doors.context";

export const useDoors = () => {
  return useContext(DoorsContext);
};
