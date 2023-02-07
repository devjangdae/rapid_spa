import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LogIn from "./LogIn";
import Main from "./Main";
import Maintest from "./pages/Maintest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/maintest" element={<Maintest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
