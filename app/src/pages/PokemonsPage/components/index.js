import React from 'react'
import styles from './styles.module.scss'


const PokemonPageLayout = ({list}) => {
        return (
                <div className={styles.wrapper}>
                        <div className={styles.pokemons}>{list.map(({id, name, image, price}) => (
                                <div className={styles.container} key={id}>
                                <div>{name}</div>
                                <img src={image}></img>
                                <div>{price}</div>
                                </div>
                                
                        ))}
                        </div>
                </div>
        )
}
export default PokemonPageLayout