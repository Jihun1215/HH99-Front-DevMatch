import axios from 'axios';



// axios 요청이 들어가는 모든 모듈 
export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});


// 전체프로젝트리스틀 가져오는 함수
export const GetProject = async ({ token }) => {
    // console.log(token)
    try {
        // api/로 하면 404 api/project로 하면 500 토큰을 빼면 403 하... 
        // http://3.36.124.131/api/project
        const response = await api.get('/api/project', {
            headers: { Authorization: token },
        });
        // console.log(response)
        return response.data

    }
    catch (error) {
        console.log("전체프로젝트 조회함수: ", error)
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

export const EditMyInfo = async ({ Data, token }) => {
    try {
        const response = await api.put(`api/user/${Data.id}`, { nickname: Data.nickName, introduction: Data.introduction, part: Data.part },
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        return response.data
    } catch (error) {
        console.log(error)
    }
    // 닉네임이나, selectedPart, introduction 값이들어가야 한다 
    // if (selectedPart == "")
}



