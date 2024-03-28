import { useContext } from "react";
import { DevicesContext } from "./Devices.context";

export const useDevices = () => {
  return useContext(DevicesContext);
};
