import { useEffect, useState } from "react";
import { CardStyled, H2Styled, H3Styled, UlStyled } from "./Card.styles";
import { FaHotjar } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { BsSnow2 } from "react-icons/bs";
import { PiThermometerHot } from "react-icons/pi";
import { device } from "../../contexts/devices/Devices.interfaces";
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

  const defineIconByTemp = (temp: string) => {
    const t = parseFloat(temp);
    if (t <= 22) {
      return <BsSnow2 size={35} color={"#eeeeee"} />;
    } else if (t > 22 && t <= 25) {
      return <PiThermometerHot size={35} color={"#222222"} />;
    } else {
      return <FaHotjar size={35} color={"#eeeeee"} />;
    }
  };

  const handleClick = () => {
    console.log("clicou no botão ");
  };

  useEffect(() => {
    console.log(isOn);
    setIsOn(!isOn);
    handleClick();
  }, []);

  return (
    <CardStyled className={defineClassByTemp(deviceData.value)} opacity={1}>
      {defineIconByTemp(deviceData.value)}
      <UlStyled>
        <li>
          <H2Styled className={true ? "on" : "off"}>
            {deviceData ? parseFloat(deviceData.value).toFixed(1) : ""}
          </H2Styled>
        </li>
        <li>
          <TbTemperatureCelsius size={50} color={"#eeeeee"} />
        </li>
      </UlStyled>
      <H3Styled className={true ? "on" : "off"}>
        {deviceData ? deviceData.thermistor.location : ""}
      </H3Styled>
    </CardStyled>
  );
};
