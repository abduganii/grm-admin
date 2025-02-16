import { QueryClient } from "@tanstack/react-query";
import qs from "qs";

type FetchOptions = RequestInit & { params?: Record<string, unknown> };

const baseURL = import.meta.env.VITE_API_BACKEND_URL;

const apiFetch = async (endpoint: string, options: FetchOptions = {}) => {
  const url = new URL(`${baseURL}/${endpoint}`);

  if (options.params) {
    url.search = qs.stringify(options.params, { arrayFormat: "repeat" });
  }

  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
    // lang: Store.getLang(),
  };

  const token = "";
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url.toString(), {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default apiFetch;
