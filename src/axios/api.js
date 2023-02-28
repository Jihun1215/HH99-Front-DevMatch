import axios from 'axios';



// axios 요청이 들어가는 모든 모듈 


export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

// 프로젝트가 들어가있는 권한 
export const GetProject = async ({ token }) => {
    // console.log(token)
    try {
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


export const PostProject = async ({ token, data }) => {
    // console.log(token, data)
    try {
        const response = await api.post('api/project', data, {
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




