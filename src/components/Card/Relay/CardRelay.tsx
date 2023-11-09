import { CardStyled, H3Styled, UlStyled } from "./CardRelay.styles";
import { LuPowerOff, LuPower} from "react-icons/lu";
import { FaToggleOn, FaToggleOff, FaWater } from "react-icons/fa";
import { TbFountain } from "react-icons/tb";
import { FaSwimmingPool } from "react-icons/fa";
import { relayData } from "../../../contexts/devices/Devices.interfaces";
import { ButtonStyled } from "./CardRelay.styles";
import { newRelayState } from "../../../services/api/api.interfaces";
import { useDevices } from "../../../contexts/devices/useDevices";

interface Props {
  relayData: relayData;
}

export const CardRelay: React.FC<Props> = (props) => {
  const { relayData } = props;
  const { handleNewRelayState } = useDevices();

  const checkSurname = () => {
    if (relayData.relay.surname == "Piscina") {
      return <FaSwimmingPool color={"#eeeeee"} size={25} />;
    } else if (relayData.relay.surname == "Fonte") {
      return <TbFountain color={"#eeeeee"} size={25} />;
    } else {
      return <FaWater color={"#eeeeee"} size={25} />;
    }
  };

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
      {checkSurname()}
      <UlStyled>
        <li>
          <H3Styled className={relayData.currentLevel ? "on" : "off"}>
            {relayData ? relayData.relay.surname : ""}
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
