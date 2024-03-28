import { createContext } from "react";
import { DevicesInterfaces } from "./Devices.interfaces";

export const DevicesContext = createContext<DevicesInterfaces>({
  handleDevices: () => Promise.resolve(),
  handleRelays: () => Promise.resolve(),
  handleNewRelayState: () => Promise.resolve(),
  device: [],
  relays: [],
});
