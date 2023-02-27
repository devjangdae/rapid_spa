// 폴더 구조 예시

import { useState } from "react";

const useDrawer = () => {
  const [isLogin, updateLogin] = useState(1);

  const checkLogin = () => {
    return false;
  };
  return { checkLogin };
};

export default useDrawer;
