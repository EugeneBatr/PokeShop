import React from 'react'
import Button from '@mui/material/Button';

import styles from './styles.module.scss'

export const RegisterForm = ({formValue, onChange, onSubmit}) => {
        return (
                <div className={styles.wrapper}>
                        <form className={styles.container} onSubmit={onSubmit}>
                                <h1 className={styles.title}>PokeShop</h1>
                                <div className={styles.row}>
                                        
                                        <div className={styles.column}>
                                                <div>Email</div>
                                                <input className={styles.input} 
                                                        type='email' 
                                                        value={formValue.email}
                                                        name="email"
                                                        onChange={onChange}
                                                />
                                                <div>FirstName</div>
                                                <input className={styles.input}
                                                        type='firstName'
                                                        value={formValue.firstName}
                                                        name='firstName'
                                                        onChange={onChange}
                                                />
                                                <div>Gender</div>
                                                <input className={styles.input}
                                                        type='gender'
                                                        value={formValue.gender}
                                                        name='gender'
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
                                                
                                                <div>LastName</div>
                                                <input className={styles.input}
                                                        type='lastName'
                                                        value={formValue.lastName}
                                                        name='lastName'
                                                        onChange={onChange}
                                                />
                                                <div>Phone</div>
                                                <input className={styles.input}
                                                        type='phone'
                                                        value={formValue.phone}
                                                        name='phone'
                                                        onChange={onChange}
                                                />
                                        </div>
                                </div>
                                <Button variant='contained' color='error' onClick={onSubmit}>
                                        signup
                                </Button>
                        </form>
                        
                </div>
        )
}