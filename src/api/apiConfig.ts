import axios from "axios";

const sidnamAPI = axios.create({
  baseURL: 'https://api.sidnam.org/api',
  headers: { 'Content-Type': 'application/json' }
})

export default sidnamAPI

//api