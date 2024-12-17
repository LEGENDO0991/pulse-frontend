import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || "http://localhost:3000/api/",
  headers:{
    Authorization:localStorage.getItem("token")
  }
});