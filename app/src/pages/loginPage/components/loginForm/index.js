import styles from './styles.module.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../routes/routeNames'
import Button from '@mui/material/Button';


export const LoginForm = ({formValue, onChange, onSubmit}) => {
        return (
                <div className={styles.wrapper}>
                        <form onSubmit={onSubmit} className={styles.container} >
                                <h1 className={styles.title}>PokeShop</h1>
                                <div>
                                        <div>Email</div>
                                        <input className={styles.input}
                                                type='email' 
                                                value={formValue.email}
                                                name="email"
                                                onChange={onChange}
                                        />
                                </div>
                                <div>
                                        <div>Password</div>
                                        <input className={styles.input}
                                                type='password'
                                                value={formValue.password}
                                                name='password'
                                                onChange={onChange}
                                        />
                                </div>        
                                <Button   variant='contained' color='error'   onClick={onSubmit} >
                                        Login
                                </Button>
                                <div className={styles.register}>
                                        <div>Not registered?</div>
                                        <Link to={ROUTES.REGISTER}>
                                                sign up
                                        </Link>
                                </div>
                                
                        </form>
                </div>        
        )
}


