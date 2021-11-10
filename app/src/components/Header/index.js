import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";

const Header = () => {
        return (
                <div>
                        {Object.entries(ROUTES).map(([routeNames, path]) => (
                                <Link to={path} key={routeNames}>
                                        <button>{routeNames}</button>
                                </Link>
                        ))}
                </div>
        );
};

export default Header