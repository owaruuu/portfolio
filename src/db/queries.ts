import axios from "axios";
import { siteData } from "../types";

let API_URL = "http://localhost:3000/data";
API_URL = "https://d1oib1fwc6cyvj.cloudfront.net/db.json";
const instance = axios.create();

export const getData = async (): Promise<siteData> => {
    const response = await instance.get(`${API_URL}`);

    // console.log("🚀 ~ getData ~ response:", response);
    return response.data.data;
};
