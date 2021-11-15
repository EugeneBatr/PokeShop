import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";
import { NavBar } from "../NavBar";

import styles from './styles.module.scss'

const Header = () => {
        return (
                <div className={styles.wrapper}>
                        <div></div>
                        
                                <NavBar/>
                                
                </div>
        );
};

export default Header