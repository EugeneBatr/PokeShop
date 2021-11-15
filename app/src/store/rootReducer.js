import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import storage from "redux-persist/lib/storage";

import authReducer from "../pages/loginPage/reducers";
import registerReducer from "../pages/registerPage/reducers";
import pokemonsPageReducer from '../pages/PokemonsPage/reducers';

const authBlackListedFields = createBlacklistFilter( 'auth', [
        'isLoading',
        'errors',
])

const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['auth'],
        transforms: [authBlackListedFields],
}

const rootReducer = combineReducers({
        auth: authReducer,
        register: registerReducer,
        pokemons: pokemonsPageReducer,
});

export default persistReducer(persistConfig, rootReducer)