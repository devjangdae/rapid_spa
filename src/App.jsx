import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/page/index";
import NotFound from "./pages/notFound/index";
import Login from "./pages/login/index";
import Manual from "./pages/manual/index";
// 테스트용
import DataTableTest from "./components/DataTable/index";
import Mainrapid from "./pages/mainrapid/Mainrapid";
import Mainrapid2 from "./pages/mainrapid/Mainrapid2";
import Maintest from "./pages/maintest/Maintest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/page" element={<Page />}>
          <Route path="/page/login" element={<Login />} />
          <Route path="/page/manual" element={<Manual />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* 테스트용 */}
        <Route path="/datatabletest" element={<DataTableTest />} />
        <Route path="/mainrapid" element={<Mainrapid />} />
        <Route path="/mainrapid2" element={<Mainrapid2 />} />
        <Route path="/maintest" element={<Maintest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
