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

export interface deviceData {
  statusCode: number;
  data: device[];
}

export interface DevicesInterfaces {
  handleDevices: () => void;
  device: device[];
  control: boolean;
}
