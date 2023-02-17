/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom";

function Manual() {
  return (
    <div>
      <div>메인페이지</div>
      <Outlet />
    </div>
  );
}

export default Manual;
