import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { CustomThemeProvider } from "./contexts/CustomTheme/CustomTheme.provider";
import { DoorsProvider } from "./contexts/Doors/Doors.provider";
import { DevicesProvider } from "./contexts/Devices/Devices.provider";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <DevicesProvider>
          <DoorsProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </DoorsProvider>
        </DevicesProvider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
