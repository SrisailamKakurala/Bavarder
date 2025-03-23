import Env from "./env";

export const Base_URL = Env.BACKEND_URL;
export const API_URL = `${Base_URL}/api`;
export const LOGIN_URL = `${API_URL}/auth/login`;