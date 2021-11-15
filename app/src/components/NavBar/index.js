import { useSelector } from "react-redux"
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { NAV_CONFIG, NAV_TYPE_NAMES } from "./config";

import styles from './styles.module.scss'

export const NavBar = () => {
        const {isAuth} = useSelector(state => state.auth);

        const navItems = useMemo(() =>  {
                const navType = isAuth ? NAV_TYPE_NAMES.PRIVATE : NAV_TYPE_NAMES.PUBLIC;

                return NAV_CONFIG[navType];
        },[isAuth])
        return (
                <div className={styles.container}>
                        {navItems.map(({label, path}) => (
                                <Link key={path} to={path} className={styles.a}>
                                        <div >
                                                <div className={styles.button}>
                                                        {label}
                                                </div>
                                        </div>
                                </Link>
                                ))}
                </div>
        )
}
