import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/homePage';
import { LoginPageContainer } from '../pages/loginPage/containers/LoginPageContainer';
import {ROUTES} from './routeNames'


const Routes = () => {
        return (
                <Switch>
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route exact path={ROUTES.LOGIN} component={LoginPageContainer}/>
                        <Redirect path='*' to={ROUTES.HOME}/>
                </Switch>
        );
};

export default Routes