import axios from "axios";

// 회원가입
export const PostSiginup = async (newSignupinto) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, newSignupinto);
}
// 로그인
export const PostLogin = async (Logininto) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, Logininto);
}
// 내정보수정
export const MyintoEidt = async () => {
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/edit`);
}




