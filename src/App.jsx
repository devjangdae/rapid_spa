import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/page/index";
import Login from "./pages/login/index";
import Manual from "./pages/manual/index";
import NotFound from "./pages/notFound/index";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
