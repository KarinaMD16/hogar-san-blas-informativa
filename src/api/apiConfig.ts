import axios from "axios";

const sidnamAPI = axios.create({
  baseURL: 'https://sidnam-backend-2.onrender.com',
  headers: { 'Content-Type': 'application/json' }
})

export default sidnamAPI