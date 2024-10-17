import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import ServiceDetail1 from "./components/services/ServiceDetail1";
import ServiceDetail2 from "./components/services/ServiceDetail2";
import ServiceDetail3 from "./components/services/ServiceDetail3";
import ServiceDetail4 from "./components/services/ServiceDetail4";
import useLocalStorage from "use-local-storage";
import { Main } from "./Main";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
    <div className="app" data-theme={theme}>
      <Routes>
        <Route path="/" element={<Main theme={theme} switchTheme={switchTheme} />} />
        <Route path="/service-detail-1" element={<ServiceDetail1 />} />
        <Route path="/service-detail-2" element={<ServiceDetail2 />} />
        <Route path="/service-detail-3" element={<ServiceDetail3 />} />
        <Route path="/service-detail-4" element={<ServiceDetail4 />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
