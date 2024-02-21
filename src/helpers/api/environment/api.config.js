import API_LOCAL from "./api-local";

const hostname = typeof window !== "undefined" ? window.location.hostname : "";

export const API = hostname === "localhost" && API_LOCAL;
