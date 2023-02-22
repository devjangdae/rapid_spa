// 각종 컴포넌트에서 사용할 rest-api 요청 파일들의 집합
// 파일명은 [도메인명]Request.ts(jsx)의 네이밍 규칙을 따를것!(camel case)
import axios from "axios";

export const getRequest = ({ url, token }) => {
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
