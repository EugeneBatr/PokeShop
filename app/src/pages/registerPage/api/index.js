import api from "../../../http";

export const register = (signData) => api.post('auth/signup',signData);