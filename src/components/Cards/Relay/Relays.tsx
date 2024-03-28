import { CardStyled, H3Styled, UlStyled } from "./Relays.styles";
import { LuPowerOff, LuPower } from "react-icons/lu";
import { relayData } from "../../../contexts/Devices/Devices.interfaces";
import { ButtonStyled } from "./Relays.styles";
import { newRelayState } from "../../../services/api/api.interfaces";
import { useDoors } from "../../../contexts/Doors/useDoors";
import { useEffect } from "react";
import { useDevices } from "../../../contexts/Devices/useDevices";

interface Props {
  relayData: relayData;
}

export const CardRelay: React.FC<Props> = (props) => {
  const { relayData } = props;
  const { handleNewRelayState } = useDevices();
  const { handleFindAllDoors } = useDoors();

  useEffect(() => {
    handleFindAllDoors();
  }, []);

  const handleClick = (relayData: relayData) => {
    const newState: newRelayState = {
      relayId: relayData.relay.id,
      expectedLevel: !relayData.expectedLevel,
      currentLevel: relayData.currentLevel,
    };
    handleNewRelayState(newState);
  };

  return (
    <CardStyled className={relayData.currentLevel ? "on" : "off"} opacity={1}>
      <UlStyled>
        <li>
          <H3Styled className={relayData.currentLevel ? "on" : "off"}>
            {relayData ? relayData.relay.surname.toUpperCase() : ""}
          </H3Styled>
        </li>
        <li>
          <ButtonStyled onClick={() => handleClick(relayData)}>
            {relayData.currentLevel ? (
              <LuPower color={"#fca311"} size={25} />
            ) : (
              <LuPowerOff color={"silver"} size={25} />
            )}
          </ButtonStyled>
        </li>
      </UlStyled>
    </CardStyled>
  );
};
