import api from "../../../http";

export const pokemons = (signData) => api.get('products',signData);