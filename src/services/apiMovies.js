const { default: axios } = require("axios");

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer + process.env.API_KEY'
    }
})

export default apiMovie