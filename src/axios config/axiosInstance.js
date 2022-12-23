import axios from 'axios'


const axiosInstance=  axios.create({
    baseURL:"http://localhost:5200/api/elabdfoods/",
//   params:{

//   }

   })


export default axiosInstance