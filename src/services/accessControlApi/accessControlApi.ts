import axios from "axios";
import { AccessDoors } from "./accessControlApi.interfaces";

const accessControlApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ACCESS_CONTROL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const findAllDoors = async (
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await accessControlApi.get(
        `/doors/findall`
      );
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const accessDoors = async (
  data: AccessDoors
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await accessControlApi.patch(`/doors/access`, data);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};