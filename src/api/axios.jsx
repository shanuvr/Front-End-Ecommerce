import axios from "axios"

const api =  axios.create({
    baseURL:'http://43.204.103.238:3000/',
    withCredentials:true
})

export default api;
