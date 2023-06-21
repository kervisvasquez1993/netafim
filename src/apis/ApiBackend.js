import axios from "axios";

export const ApiBackend = axios.create({
    baseURL: import.meta.env.VITE_BACKEND, 
});
