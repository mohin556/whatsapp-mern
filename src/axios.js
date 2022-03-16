import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:5055",
})

export default instance;