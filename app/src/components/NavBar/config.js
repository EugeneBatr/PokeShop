import { ROUTES } from "../../routes/routeNames";

export const NAV_TYPE_NAMES = {
        PUBLIC: 'public',
        PRIVATE: 'private',
}

export const NAV_CONFIG = {
        [NAV_TYPE_NAMES.PUBLIC]: [
                {
                        label: 'Login',
                        path: ROUTES.LOGIN
                },
                {
                        label: 'Register',
                        path: ROUTES.REGISTER
                }
        ],
        [NAV_TYPE_NAMES.PRIVATE]: [
                {
                        label: 'Home',
                        path: ROUTES.HOME
                },
                {
                        label: 'Pokemons',
                        path: ROUTES.POKEMONS_PAGE
                },
                {
                        label: 'Cart',
                        path: ROUTES.CART
                }
        ],
}