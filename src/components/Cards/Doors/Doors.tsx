import { Door } from "../../../contexts/Doors/Doors.interfaces";
import { useDoors } from "../../../contexts/Doors/useDoors";
import { AccessDoors } from "../../../services/accessControlApi/accessControlApi.interfaces";
import { ButtonStyled, CardStyled, H3Styled, UlStyled } from "./Doors.styles";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { ButtonLoading } from "../../Loading/Button/ButtonLoading";
import { useEffect, useState } from "react";

interface Props {
  doorData: Door;
}

export const Doors: React.FC<Props> = (props) => {
  const { doorData } = props;
  const { handleAccessDoors } = useDoors();
  const [oldDoorState, setOldDoorState] = useState<boolean>(doorData.isOpen);

  const handleClick = (doorData: Door) => {
    setOldDoorState(!doorData.isOpen);
    const data: AccessDoors = {
      doorId: doorData.id,
      isOpen: !doorData.isOpen,
      cardNumber: "123456",
    };
    handleAccessDoors(data);
  };

  useEffect(() => {
    setOldDoorState(doorData.isOpen);
  }, [doorData.isOpen]);

  return (
    <CardStyled className={doorData.isOpen ? "on" : "off"} opacity={1}>
      <UlStyled>
        <li>
          <H3Styled className={doorData.isOpen ? "on" : "off"}>
            {doorData.name.toUpperCase()}
          </H3Styled>
        </li>
        <li>
          {oldDoorState != doorData.isOpen ? (
            <ButtonLoading />
          ) : (
            <ButtonStyled onClick={() => handleClick(doorData)}>
              {doorData.isOpen ? (
                <FaLockOpen color={"#333333"} size={20} />
              ) : (
                <FaLock color={"#fca311"} size={20} />
              )}
            </ButtonStyled>
          )}
        </li>
      </UlStyled>
    </CardStyled>
  );
};
