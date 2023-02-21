import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Provider } from "react-redux";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import store from "../../reducers/store";
import ManualBox from "../../components/ManualBox/index";
import DrawerRapid from "../../components/Drawer/DrawerRapid";

function Manual() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
      console.log("로그인 토큰 정보가 없습니다. 로그인페이지로 이동합니다.");
      navigate("/maintest");
    }
  }, []);

  return (
    <div className="basic-container">
      <Provider store={store}>
        <div className="basic-header">
          <Header />
        </div>
        <div className="content-container">
          <ManualBox />
          <DrawerRapid />
        </div>
        <div className="basic-footer">
          <Footer />
        </div>
        <Outlet />
      </Provider>
    </div>
  );
}

export default Manual;
