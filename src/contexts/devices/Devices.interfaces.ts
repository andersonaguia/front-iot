import { newRelayState } from "../../services/api/api.interfaces";

export interface DevicesProviderProps {
  children: React.ReactNode;
}

export interface thermistor {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null | Date;
  manufacturer: string;
  model: string;
  minRange: number;
  maxRange: number;
  nominalResistance: number;
  voltageDividerResistance: number;
  controllerPort: number;
  location: string;
}

export interface device {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null | Date;
  value: string;
  thermistor: thermistor;
}

export interface relay {
  id: 2;
  activeAtLowLevel: true;
  surname: string;
  controllerPort: 29;
}

export interface relayData {
  id: number;
  expectedLevel: boolean;
  currentLevel: boolean;
  relay: relay;
}
export interface DevicesInterfaces {
  handleDevices: () => void;
  handleRelays: () => void;
  handleNewRelayState: (handleNewRelayState: newRelayState) => void;
  device: device[];
  control: boolean;
  relays: relayData[];
}
