import { createAction } from "redux-actions";

export const GET_CART_REQUEST = createAction('GET_CART_REQUEST')
export const GET_CART_SUCCESS = createAction('GET_CART_SUCCESS')
export const GET_CART_FAIL = createAction('GET_CART_FAIL')

export const ADD_CART_REQUEST = createAction('ADD_CART_REQUEST')
export const ADD_CART_SUCCESS = createAction('ADD_CART_SUCCESS')
export const ADD_CART_FAIL = createAction('ADD_CART_FAIL')
