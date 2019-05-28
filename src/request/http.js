import axios from "axios";


const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
});


service.interceptors.request.use(
    config=>{
        //todo somethings
        return config
    }
)


service.interceptors.response.use(
    response=>{
        //todo somethings
        const res = response.data
        // return config

        return res
    }
)


export default service
