import * as loginPageActions from '../pages/loginPage/actions'
import * as loginPageAPI from '../pages/loginPage/api'

import * as registerPageActions from '../pages/registerPage/actions'
import * as registerPageAPI from '../pages/registerPage/api'

import * as pokemonsPageActions from '../pages/PokemonsPage/actions'
import * as pokemonsPageApi from '../pages/PokemonsPage/api'

const apiCallsMapping = (action) => {
        const mapping = {
                [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,
                [registerPageActions.REGISTER_IN_REQUEST]: registerPageAPI.register,
                [pokemonsPageActions.GET_POKEMONS_REQUEST]: pokemonsPageApi.pokemons,
        };
        
        return mapping[action.type]
};

export default apiCallsMapping