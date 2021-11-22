import { nativeSelectClasses } from "@mui/material"
import { handleActions } from "redux-actions"

import * as actions from '../actions'

const defaultState = {
        info: {},
        isLoading: false,
        error: null,
}

const pokemonDetailsPageReducer = handleActions({
        [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
                ...state,
                isLoading: true,
        }),
        [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, {payload}) => ({
                ...state,
                info: payload.response,
                isLoading: false,
                error: null,
        }),
        [actions.GET_POKEMON_DETAILS_FAIL]: (state, {payload}) => ({
                ...state,
                isLoading: false,
                error: payload,
        })
}, defaultState)

export default pokemonDetailsPageReducer