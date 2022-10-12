import axios from "axios";

export const client = axios.create();
client.defaults.baseURL = "https://pre-onboarding-selection-task.shop/";
