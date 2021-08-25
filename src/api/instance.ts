import axios from "axios";

export const createInstance = (path: string) => {

    const url = "http://localhost:5001/api";

    const instance = axios.create({
        baseURL: `${url}/${path}`
    });

    instance.interceptors.response.use(
        (response) => response,
        (error) => { throw error; }
    );

    return instance;
}
