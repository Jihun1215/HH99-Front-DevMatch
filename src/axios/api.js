import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

export const PostProject = async ({ token, data }) => {
    // console.log(token, data)
    try {
        const reponse = await api.post('api/project', data, {
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
            },
        }
        );
        console.log(reponse);
    } catch (error) {
        console.log(error)
    }
};




