import axios from "axios";


export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
})

export const apitest = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL2,
})


// // 내정보수정
// export const EditMyinto = async () => {
//     await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/edit`);
// }

// // 프로젝트조회
// export const GetList = async () => {
//     const reponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/projects`);
//     console.log(reponse)
//     return reponse.data
// }



