import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginrapid from "./pages/loginrapid/Loginrapid";
import Mainrapid from "./pages/mainrapid/Mainrapid";
import Maintest from "./pages/maintest/Maintest";
import OutletTest from "./pages/outletTest/outletTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginrapid />} />
        <Route path="/mainrapid" element={<Mainrapid />} />
        <Route path="/maintest" element={<Maintest />} />
        <Route path="/outlettest" element={<OutletTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
