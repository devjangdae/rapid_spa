import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
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
    </div>
  );
}

export default Manual;
