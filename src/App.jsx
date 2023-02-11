import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import LogIn from "./pages/login/LogIn";
import Mainrapid from "./pages/mainrapid/Mainrapid";
import Maintest from "./pages/maintest/Maintest";

function App() {
  console.log("asd");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/mainrapid" element={<Mainrapid />} />
        <Route path="/maintest" element={<Maintest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
