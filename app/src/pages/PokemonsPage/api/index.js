import api from "../../../http";

export const pokemons = (page) => api.get(`products?page=${page}`);