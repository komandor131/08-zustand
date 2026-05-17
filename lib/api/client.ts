import axios from "axios";

export const notehubApi = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

export const getAuthorizationHeader = (): { Authorization: string } => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

  if (!token) {
    throw new Error("NEXT_PUBLIC_NOTEHUB_TOKEN is not configured");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};
