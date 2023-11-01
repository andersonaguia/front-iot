import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export const findActualValue = async (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.get(
        "/thermistordata/findactualvalue/1"
      );
      resolve(result);
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
