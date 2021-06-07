import axios from 'axios'

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
})

export default instance;
//https://api.themoviedb.org/3/trending/all/week?api_key=a5ab2f736cfb21fa3416c35bddc1fc0e&language=en-US