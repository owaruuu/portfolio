import axios from "axios";
import { siteData } from "../types";

const API_URL = "http://localhost:3000";
const instance = axios.create();

export const getData = async (): Promise<siteData> => {
    const response = await instance.get(`${API_URL}/data`);

    console.log("🚀 ~ getData ~ response:", response);
    return response.data;
};
