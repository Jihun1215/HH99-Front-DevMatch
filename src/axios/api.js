import axios from 'axios';

// axios 요청이 들어가는 모든 모듈
export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

// 전체프로젝트리스틀 가져오는 함수
export const GetProject = async ({ token }) => {
    try {
        const response = await api.get('/api/project', {
            headers: { Authorization: token },
        });
        return response.data;
    } catch (error) {
        console.log('전체프로젝트 조회함수: ', error);
    }
};

// 프로젝트를 작성하는 함수
export const PostProject = async ({ token, data }) => {
    // console.log(token, data)
    try {
        await api.post('/api/project', data, {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch (error) {
        console.log('PostProjectError: ', error);
    }
};

// 전체 유저를 조회하는 함수
export const AllUserInfo = async () => {
    try {
        const response = await api.get('api/user/info');
        // console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// 내정보 수정 함수
// export const EditMyInfo = async ({ data2, token, userID }) => {
//     try {
//         const response = await api.put(`api/user/${userID}`, data2, {
//             headers: {
//                 Authorization: token,
//             },
//         });
//         console.log('response', response);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
//     // 닉네임이나, selectedPart, introduction 값이들어가야 한다
//     // if (selectedPart == "")
// };
