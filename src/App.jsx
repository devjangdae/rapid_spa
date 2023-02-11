import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Loginrapid from "./pages/loginrapid/Loginrapid";
import Mainrapid from "./pages/mainrapid/Mainrapid";
import Maintest from "./pages/maintest/Maintest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginrapid />} />
        <Route path="/mainrapid" element={<Mainrapid />} />
        <Route path="/maintest" element={<Maintest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
