/** @jsxImportSource @emotion/react */
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Page() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/page/login");
  // }, []);

  return <Outlet />;
}

export default Page;
