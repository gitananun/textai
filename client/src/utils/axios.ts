import axios, { AxiosInstance } from "axios";

import { showErrorToast } from "@utils/notifiers";

export const axiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (!error.response) {
        showErrorToast({ message: "Server Connection is down" });
        return;
      }

      const status = error.response.status;
      let message = "Something went wrong";

      switch (status) {
        case 401:
          message = "Unauthorized";
          break;
        case 404:
          message = "Resource not found";
          break;
        case 400:
          message = error.response.statusText ?? "Invalid Request";
          break;
        case 409:
          message = error.response.statusText ?? "Record already exists";
          break;
        default:
          break;
      }

      showErrorToast({ message });
    },
  );

  return instance;
};
