import { useEffect, useState } from "react";
import { DoorsInterfaces, DoorsProviderProps, Door } from "./Doors.interfaces";
import { DoorsContext } from "./Doors.context";
import { accessDoors, findAllDoors } from "../../services/accessControlApi/accessControlApi";
import { AccessDoors } from "../../services/accessControlApi/accessControlApi.interfaces";

export const DoorsProvider: React.FC<DoorsProviderProps> = ({ children }) => {
  const [control, setControl] = useState<boolean>(false);
  const [doors, setDoors] = useState<Door[]>([]);

  const handleFindAllDoors = async () => {
    await findAllDoors()
      .then((res) => {
        if (res.status == 200) {
          setDoors(res.data);
          setControl(!control);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccessDoors = async (data: AccessDoors) => {
    await accessDoors(data)
      .then((res) => {
        if (res.status == 200) {
          setControl(!control);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleFindAllDoors();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const DevicesContextValues: DoorsInterfaces = {
    handleFindAllDoors,
    handleAccessDoors,
    doors,
  };

  return (
    <DoorsContext.Provider value={DevicesContextValues}>
      {children}
    </DoorsContext.Provider>
  );
};
