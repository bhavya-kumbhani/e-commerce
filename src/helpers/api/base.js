import axios from "axios";
import { API } from "./environment/api.config";

const axiosApi = axios.create({
  baseURL: `${API.endpoint}/`,
});
export const axiosInstance = axiosApi;
export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { params: config })
    .then((response) => response)
    .catch((error) => error.response);
}

export async function patch(url, data, config = {}) {
  return await axiosApi
    .patch(url, { ...data }, { ...config })
    .then((response) => response)
    .catch((error) => error.response);
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response)
    .catch((error) => error.response);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response);
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response);
}

export const thunkHandler = async (asyncFn, thunkAPI) => {
  try {
    const response = await asyncFn;
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
};
export function isSuccessResp(status) {
  if (status >= 200 && status <= 299) {
    return true;
  }
  return false;
}
