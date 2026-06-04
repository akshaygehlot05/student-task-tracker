import axios from "axios";

const API = axios.create({
  baseURL: "https://student-task-tracker-hw4o.onrender.com/api",
});

export default API;