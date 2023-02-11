import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./LogIn";
import Main from "./Main";
import Maintest from "./pages/maintest/Maintest";
import Logintest from "./pages/logintest/Logintest";

function App() {
  console.log("asd");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/main" element={<Main />} />
        <Route path="/maintest" element={<Maintest />} />
        <Route path="/logintest" element={<Logintest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
