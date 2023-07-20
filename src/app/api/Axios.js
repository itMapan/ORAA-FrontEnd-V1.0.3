import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Router from "../providers/Router";

const api_TokenVariable = "AuthToken"; // Token variable
const urlCallback = "/"; // Callback url when authorization false

/**
 * Create Axios Client
 * */
const AxiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URI}`,
  headers: {
    withCredentials: true
  }
});

/**
 * Set header information
 * -- Bearer token set
 */
AxiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${secureLocalStorage.getItem(
    api_TokenVariable
  )}`;
  return config;
});

/**
 * Set header information
 * -- Condition when authorization false
 */
AxiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      Router.navigate(urlCallback);
      return error;
    }
    throw error;
  }
);

export default AxiosClient;
