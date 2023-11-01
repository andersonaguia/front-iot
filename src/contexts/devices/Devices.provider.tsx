import { useEffect, useState } from "react";
import {
  DevicesInterfaces,
  DevicesProviderProps,
  device,
} from "./Devices.interfaces";
import { findActualValue } from "../../services/api/api";
import { DevicesContext } from "./Devices.context";

const mocDevice = [
  {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    value: "25.4",
    thermistor: {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      manufacturer: "Full Gauge",
      model: "SB-41",
      minRange: -50,
      maxRange: 105,
      nominalResistance: 10000,
      voltageDividerResistance: 4700,
      controllerPort: 34,
      location: "Sala de Automação",
    },
  },
  {
    id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    value: "24.01",
    thermistor: {
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      manufacturer: "Full Gauge",
      model: "SB-41",
      minRange: -50,
      maxRange: 105,
      nominalResistance: 10000,
      voltageDividerResistance: 4700,
      controllerPort: 34,
      location: "Piscina",
    },
  },
  {
    id: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    value: "22.4",
    thermistor: {
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      manufacturer: "Full Gauge",
      model: "SB-41",
      minRange: -50,
      maxRange: 105,
      nominalResistance: 10000,
      voltageDividerResistance: 4700,
      controllerPort: 34,
      location: "Água Pav 3",
    },
  },
];

export const DevicesProvider: React.FC<DevicesProviderProps> = ({
  children,
}) => {
  const [control, setControl] = useState<boolean>(false);
  const [device, setDevice] = useState<device[]>([]);

  const handleDevices = async () => {
    await findActualValue()
      .then((res) => {
        if (res.statusCode == 200) {
          //setDevice(res.data);
          setDevice(mocDevice);
          setControl(!control);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleDevices();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Device: ", device);
      handleDevices();
    }, 15000);
    return () => clearInterval(intervalId);
  }, []);

  const DevicesContextValues: DevicesInterfaces = {
    handleDevices,
    device,
    control,
  };

  return (
    <DevicesContext.Provider value={DevicesContextValues}>
      {children}
    </DevicesContext.Provider>
  );
};
