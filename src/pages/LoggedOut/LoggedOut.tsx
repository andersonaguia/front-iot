import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Footer } from "../../components/Footer/Footer";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { themeLight } from "../../themes/themeLight";
import { themeDark } from "../../themes/themeDark";
import { Background } from "../../components/Background/Background";
import { useEffect } from "react";
import { Card } from "../../components/Cards/Temperatures/Temperatures";
import { Loading } from "../../components/Loading/Loading";
import { CardRelay } from "../../components/Cards/Relay/Relays";
import { Doors } from "../../components/Cards/Doors/Doors";
import { useDevices } from "../../contexts/Devices/useDevices";
import { useDoors } from "../../contexts/Doors/useDoors";
import { DivStyled } from "./LoggedOut.styles";

export const LoggedOut: React.FC = () => {
  const { theme } = useCustomTheme();
  const { device, control, relays } = useDevices();
  const { handleFindAllDoors, doors } = useDoors();

  useEffect(() => {}, [device.length, relays.length, control, doors.length]);

  if (!control) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
      <Background>
        <Header />
        <Main
          children={
            <>
              <DivStyled>
                <h2>TEMPERATURAS</h2>
                {device.length > 0 ? (
                  device.map((device) => {
                    return <Card key={device.id} deviceData={device} />;
                  })
                ) : (
                  <Loading />
                )}
              </DivStyled>
              <DivStyled>
                <h2>DISPOSITIVOS</h2>
                {relays.length > 0
                  ? relays.map((relay) => {
                      return <CardRelay key={relay.id} relayData={relay} />;
                    })
                  : null}
              </DivStyled>
              <DivStyled>
                <h2>PORTAS</h2>
                {doors.length > 0
                  ? doors.map((door) => {
                      return <Doors key={door.id} doorData={door} />;
                    })
                  : null}
              </DivStyled>
            </>
          }
        />
        <Footer />
      </Background>
    </ThemeProvider>
  );
  /*
  return (
    <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
      <Background>
        <Header />
        <Main children={<Card key={2} deviceData={device} />} />
        <Footer />
      </Background>
    </ThemeProvider>
  );*/
};
