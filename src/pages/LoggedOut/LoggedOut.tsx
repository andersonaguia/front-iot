import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Footer } from "../../components/Footer/Footer";
import { useCustomTheme } from "../../contexts/CustomTheme/useCustomTheme";
import { themeLight } from "../../themes/themeLight";
import { themeDark } from "../../themes/themeDark";
import { Background } from "../../components/Background/Background";
import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { useDevices } from "../../contexts/devices/useDevices";

export const LoggedOut: React.FC = () => {
  const { theme } = useCustomTheme();
  const { device, control } = useDevices();

  useEffect(() => {
    console.log(control);
    console.log(device);
  }, [device]);

  return (
    <ThemeProvider theme={theme == "light" ? themeLight : themeDark}>
      <Background>
        <Header />
        <Main
          children={
            <>
              {device.length > 0 ? (
                device.map((device) => {
                  return (
                    <Card
                      key={device.id}
                      deviceData={device}
                    />
                  );
                })
              ) : (
                <Loading />
              )}
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
