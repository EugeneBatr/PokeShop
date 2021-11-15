import { handleActions } from "redux-actions";


import * as actions from '../actions';

const defaultState = {
        isLoading: false,
        info: {},
        isAuth: false,
        error: null
};

const registerReducer = handleActions({
        [actions.REGISTER_IN_REQUEST]: (state) => ({
                ...state,
                isLoading: true,
        }),
        [actions.REGISTER_IN_SUCCESS]: (state,{payload}) => {
                const { ...userInfo} = payload.actionPayload;
                return {
                        ...state,
                        isLoading: false,
                        info: userInfo,
                        isAuth: true,
                        error: null,
                }
        },
        [actions.REGISTER_IN_FAIL]: (state, {payload}) => ({
                ...state,
                isLoading: false,
                error: payload.response,
        })
},defaultState)

export default registerReducer 