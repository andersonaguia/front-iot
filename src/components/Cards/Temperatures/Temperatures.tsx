import { useEffect, useState } from "react";
import { CardStyled, H2Styled, H3Styled, UlStyled } from "./Temperatures.styles";
import { TbTemperatureCelsius } from "react-icons/tb";
import { device } from "../../../contexts/Devices/Devices.interfaces";
interface Props {
  deviceData: device;
}

export const Card: React.FC<Props> = (props) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const { deviceData } = props;

  const defineClassByTemp = (temp: string) => {
    const t = parseFloat(temp);
    if (t <= 22) {
      return "normal";
    } else if (t > 22 && t <= 25) {
      return "alert";
    } else {
      return "high";
    }
  };

  useEffect(() => {
    setIsOn(!isOn);
  }, []);

  return (
    <CardStyled className={defineClassByTemp(deviceData.value)} opacity={1}>
      <UlStyled>
        <li>
          <H2Styled className={true ? "on" : "off"}>
            {deviceData ? parseFloat(deviceData.value).toFixed(1) : ""}
          </H2Styled>
        </li>
        <li>
          <TbTemperatureCelsius size={35} color={"#eeeeee"} />
        </li>
      </UlStyled>
      <H3Styled className={true ? "on" : "off"}>
        {deviceData ? deviceData.thermistor.location.toUpperCase() : ""}
      </H3Styled>
    </CardStyled>
  );
};
