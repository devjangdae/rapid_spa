import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rss from "./pages/rss/index";
import Page from "./pages/page/index";
import NotFound from "./pages/notFound/index";
import Login from "./pages/login/index";
import Manual from "./pages/manual/index";
// 테스트용
import DataTableTest from "./components/DataTable/index";
import Loginrapid from "./pages/loginrapid/Loginrapid";
import Mainrapid from "./pages/mainrapid/Mainrapid";
import Maintest from "./pages/maintest/Maintest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rss" element={<Rss />}>
          <Route path="/rss/page" element={<Page />}>
            <Route path="/rss/page/login" element={<Login />} />
            <Route path="/rss/page/manual" element={<Manual />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* 테스트용 */}
        <Route path="/datatabletest" element={<DataTableTest />} />
        <Route path="/loginrapid" element={<Loginrapid />} />
        <Route path="/mainrapid" element={<Mainrapid />} />
        <Route path="/maintest" element={<Maintest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
