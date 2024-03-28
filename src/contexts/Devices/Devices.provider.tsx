import { useEffect, useState } from "react";
import {
  DevicesInterfaces,
  DevicesProviderProps,
  device,
  relayData,
} from "./Devices.interfaces";
import {
  findActualValue,
  findAllRelaysByControllerId,
  setNewRelayState,
} from "../../services/api/api";
import { DevicesContext } from "./Devices.context";
import { newRelayState } from "../../services/api/api.interfaces";

export const DevicesProvider: React.FC<DevicesProviderProps> = ({
  children,
}) => {
  const [control, setControl] = useState<boolean>(false);
  const [device, setDevice] = useState<device[]>([]);
  const [relays, setRelays] = useState<relayData[]>([]);

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

  const handleRelays = async () => {
    await findAllRelaysByControllerId(2)
      .then((res) => {
        if (res.data.status == 200) {
          setRelays(res.data.body.data);
          setControl(!control);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNewRelayState = async (relayState: newRelayState) => {
    console.log("relayData");
    setControl(!control);
    await setNewRelayState(relayState)
      .then((res) => {
        if (res.data.status == 201) {
          setControl(false);
        }
      })
      .catch((error) => {
        setControl(false);
        console.log(error);
      });
  };

  useEffect(() => {
    handleDevices();
    handleRelays();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //console.log("Device: ", device);
      handleDevices();
      //console.log("Relays: ", relays);
      handleRelays();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const DevicesContextValues: DevicesInterfaces = {
    handleDevices,
    handleRelays,
    handleNewRelayState,
    device,
    control,
    relays,
  };

  return (
    <DevicesContext.Provider value={DevicesContextValues}>
      {children}
    </DevicesContext.Provider>
  );
};
