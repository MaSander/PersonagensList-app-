import axios from 'axios'

const api = axios.create({
    baseURL = "https://salty-atoll-57329.herokuapp.com/personagens"
})

export default api