import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.PROD ? "https://pulse-backend-526d.onrender.com/api/" : "http://localhost:3000/api/",
  headers:{
    Authorization:localStorage.getItem("token")
  }
});