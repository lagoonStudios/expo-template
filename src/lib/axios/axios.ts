import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

const axiosInstance = axios.create({ baseURL: REACT_APP_BASE_URL });

export const GET = (endpoint: string, options?: { abortController?: AbortController }) => {
  return axiosInstance.get(endpoint, { signal: options?.abortController?.signal });
};

export const POST = (
  endpoint: string,
  body: any,
  options?: { abortController?: AbortController }
) => {
  return axiosInstance.post(endpoint, body, { signal: options?.abortController?.signal });
};

export const PUT = (
  endpoint: string,
  body: any,
  options?: { abortController?: AbortController }
) => {
  return axiosInstance.put(endpoint, body, { signal: options?.abortController?.signal });
};

export const DELETE = (
  endpoint: string,
  body: any,
  options?: { abortController?: AbortController }
) => {
  return axiosInstance.delete(endpoint, { signal: options?.abortController?.signal });
};
