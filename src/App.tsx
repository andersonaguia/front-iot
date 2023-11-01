import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { CustomThemeProvider } from "./contexts/CustomTheme/CustomTheme.provider";
import { DevicesProvider } from "./contexts/devices/Devices.provider";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <DevicesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </DevicesProvider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
