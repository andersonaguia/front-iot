import { useEffect, useState } from "react";
import {
  DevicesInterfaces,
  DevicesProviderProps,
  device,
} from "./Devices.interfaces";
import { findActualValue } from "../../services/api/api";
import { DevicesContext } from "./Devices.context";

export const DevicesProvider: React.FC<DevicesProviderProps> = ({
  children,
}) => {
  const [control, setControl] = useState<boolean>(false);
  const [device, setDevice] = useState<device[]>([]);

  const handleDevices = async () => {
    await findActualValue()
      .then((res) => {
        if (res.data.status == 200) {
          setDevice(res.data.body.data);
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
    }, 5000);
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
