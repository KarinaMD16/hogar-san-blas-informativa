import axios from "axios";

const sidnamAPI = axios.create({
  baseURL: 'https://sidnampruebaparaprofesor.onrender.com',
  headers: { 'Content-Type': 'application/json' }
})

export default sidnamAPI

//api