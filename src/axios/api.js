import axios from 'axios';



// axios 요청이 들어가는 모든 모듈 


export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

// 전체프로젝트리스틀 가져오는 함수
export const GetProject = async ({ token }) => {
    // console.log(token)
    try {
        // api/ 로 하면 404 api/project로 하면 500 토큰을 빼면 403 하... 
        const response = await api.get('api/project', {
            headers: {
                Authorization: token
            },
        });
        console.log(response)
        return response

    }
    catch (error) {
        console.log("GetProjectError: ", error)
    }
}

// 프로젝트를 작성하는 함수
export const PostProject = async ({ token, data }) => {
    // console.log(token, data)
    try {
        const response = await api.post('/api/project', data, {
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
            },
        }
        );
        console.log(response.data)
    }
    catch (error) {
        console.log("PostProjectError: ", error)
    }
};

// 상세페이지 가는 로직 받아야할값 현재누른것에 대한 Id값 과 토큰값 
// export const DetailProject = async ({ id, token }) => {

//     try {
//         const response = await api.get(`api/project/${id}`, {
//             headers: {
//                 Authorization: token,
//                 "Content-Type": "multipart/form-data",
//             },
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }




