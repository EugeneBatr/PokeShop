import * as loginPageActions from '../pages/loginPage/actions'
import * as loginPageAPI from '../pages/loginPage/api'

import * as registerPageActions from '../pages/registerPage/actions'
import * as registerPageAPI from '../pages/registerPage/api'

import * as pokemonsPageActions from '../pages/PokemonsPage/actions'
import * as pokemonsPageAPI from '../pages/PokemonsPage/api'

import * as pokemonsDetailPageActions from '../pages/PokemonDetails/actions'
import * as pokemonsDetailPageAPI from '../pages/PokemonDetails/api'

const apiCallsMapping = (action) => {
        const mapping = {
                [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,
                [registerPageActions.REGISTER_IN_REQUEST]: registerPageAPI.register,
                [pokemonsPageActions.GET_POKEMONS_REQUEST]: pokemonsPageAPI.pokemons,
                [pokemonsDetailPageActions.GET_POKEMON_DETAILS_REQUEST]: pokemonsDetailPageAPI.pokemonsDetails
        };
        
        return mapping[action.type]
};

export default apiCallsMapping