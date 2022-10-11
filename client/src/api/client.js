import axios from "axios";

export const client = axios.create();
client.defaults.baseURL = "http://localhost:8000";
