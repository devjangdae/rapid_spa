import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/page/index";
import Login from "./pages/login/index";
import Manual from "./pages/manual/index";
import NotFound from "./pages/notFound/index";

// 테스트용
import Mainrapid from "./pages/mainrapid/Mainrapid";
import Mainrapid2 from "./pages/mainrapid/Mainrapid2";

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
        <Route path="/mainrapid" element={<Mainrapid />} />
        <Route path="/mainrapid2" element={<Mainrapid2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
