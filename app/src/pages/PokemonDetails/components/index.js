import { Button } from '@mui/material';
import React from 'react'
import styles from './styles.module.scss'

export const PokemonDetailsLayout = ({info, handleIncrement}) => {

        const abilities = info.abilities
        
        return (
                <div className={styles.wrapper}>
                        
                        <div className={styles.container}>
                                <h1>Detail information about {info.name}</h1>
                                <div>
                                        <img src={info.image}></img>
                                        {/* <div>{abilities.map(({item}) => {
                                                <div>
                                                        <div>{item.title}</div>
                                                        <div>{item.description}</div>
                                                </div>
                                                
                                        })}
                                        </div> */}
                                        <div></div>
                                        <div>{info.price}</div>
                                        <Button onClick={() =>handleIncrement(info.id)}>+</Button>
                                </div>
                        </div>
                </div>
        )
}
