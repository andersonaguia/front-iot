import axios from "axios";

import { deviceData } from "../../contexts/devices/Devices.interfaces";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export const findActualValue = async (): Promise<deviceData> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(
        "/thermistordata/findactualvalue/1"
      );
      resolve(result.data.body);
    } catch (error) {
      reject(error);
    }
  });
};

export const signIn = async (data: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post("/auth/signin", data);
      console.log("RESULTADO: ", result);
      resolve(result.data);
    } catch (error) {
      console.log("ERROR: ", error);
      reject(error);
    }
  });
};
