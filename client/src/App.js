import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Scenes/global/Topbar";
import Sidebar from "./Scenes/global/Sidebar";
import Steps from "./Scenes/Steps";
import Teams from "./Scenes/teams";
import Details from "./Scenes/details";
import Fulldetails from "./Scenes/fulldetails";
import { Routes, Route } from "react-router-dom"; 
import { Dashboard } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
      <main className="content">
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Teams />} />
          <Route path="/team" element={<Dashboard />} />
          <Route path = "/steps" element={<Steps />} />
          <Route path = "/details" element={<Details />} />
          <Route path = "/fulldetails" element={<Fulldetails />} />
        </Routes>
        <Sidebar />
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
