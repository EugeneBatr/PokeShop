import { handleActions } from "redux-actions"

import * as actions from '../actions'

const defaultState = {
        totalPrice: 0,
        quantity: 0,
        itemsList: [],
        isLoading: false,
        error: null,
}

const cartPageReducer = handleActions({
        [actions.GET_CART_REQUEST]: (state) => ({
                ...state,
                isLoading: true,
        }),
        [actions.GET_CART_SUCCESS]: (state, {payload}) => ({
                ...state,
                itemsList: payload,
                isLoading: false,
                error: null,
        }),
        [actions.GET_CART_FAIL]: (state, {payload}) => ({
                ...state,
                isLoading: false,
                error: payload,
        }),
        [actions.ADD_CART_REQUEST]: (state, {payload}) => ({
                ...state,
                isLoading: true,
        }),
        [actions.ADD_CART_SUCCESS]: (state, {payload}) => {
                
                return {
                        ...state,
                        isLoading: false,
                        totalPrice: payload.response.totalPrice,
                        quantity: payload.response.quantity,
                        itemsList: payload.response.newPokemon,
                }
        },
        [actions.GET_CART_FAIL]: (state, {payload}) => ({
                ...state,
                isLoading: false,
                error: payload.response,
              }),



}, defaultState)

export default cartPageReducer