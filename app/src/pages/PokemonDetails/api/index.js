import api from "../../../http";

export const pokemonsDetails = (id) => api.get(`products/${id}`);