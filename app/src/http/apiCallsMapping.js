import * as loginPageActions from '../pages/loginPage/actions'
import * as loginPageAPI from '../pages/loginPage/api'

const apiCallsMapping = (action) => {
        const mapping = {
                [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,
        };
        console.log(action.type);
        return mapping[action.type]
};

export default apiCallsMapping