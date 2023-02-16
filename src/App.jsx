import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rss from "./pages/rss/index";
import Loginrapid from "./pages/loginrapid/Loginrapid";
import Mainrapid from "./pages/mainrapid/Mainrapid";
import Maintest from "./pages/maintest/Maintest";
import OutletTest from "./pages/outletTest/outletTest";
import DataTableTest from "./components/DataTable/DataTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rss" element={<Rss />} />
        <Route path="/" element={<Loginrapid />} />
        <Route path="/mainrapid" element={<Mainrapid />}>
          <Route path="/mainrapid/outlettest" element={<OutletTest />} />
        </Route>
        <Route path="/maintest" element={<Maintest />} />

        <Route path="/datatabletest" element={<DataTableTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
