import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/HomePage';
import { LoginPageContainer } from '../pages/loginPage/containers/LoginPageContainer';
import PokemonDetailsPageContainer from '../pages/PokemonDetails/containers/PokemonDetailsPageContainer';

import PokemonsPageContainer from '../pages/PokemonsPage/containers/PokemonsPageContainer';
import { RegisterPageContainer } from '../pages/registerPage/containers/RegisterPageContainer';
import {ROUTES} from './routeNames'


const Routes = () => {
        return (
                <Switch>
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route  path={ROUTES.LOGIN} component={LoginPageContainer}/>
                        <Route  path={ROUTES.REGISTER} component={RegisterPageContainer}/>
                        <Route exact path={ROUTES.POKEMONS_PAGE} component={PokemonsPageContainer}/>
                        <Route path={ROUTES.POKEMONS_DETAILS} component={PokemonDetailsPageContainer}/>
                        <Redirect path='*' to={ROUTES.HOME}/>
                </Switch>
        );
};

export default Routes