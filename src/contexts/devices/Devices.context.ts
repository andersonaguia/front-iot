import { createContext } from "react";
import { DevicesInterfaces } from "./Devices.interfaces";

export const DevicesContext = createContext<DevicesInterfaces>({
  handleDevices: () => Promise.resolve(),
  device: [],
  control: false,
});
