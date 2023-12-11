//Aqui deve ser feita uma importação do axios, e usado um axios.create
import axios from "axios";

const recrutaAPI = axios.create({
    baseURL: 'urldaapi'
})

export default recrutaAPI;