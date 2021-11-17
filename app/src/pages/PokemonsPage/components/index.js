import React from 'react'
import styles from './styles.module.scss'
import CustomPagination from '../../../components/CustomPagination/index'


const PokemonPageLayout = ({list, currentPage, handlePageChange, handleGoToDetails}) => {
        return (
                <div className={styles.wrapper}>
                        <div className={styles.pokemons}>{list.map(({id, name, image, price}) => (
                                <div className={styles.container} key={id}>
                                <div>{name}</div>
                                <img src={image}></img>
                                <div>{price}</div>
                                <button onClick={() =>handleGoToDetails(id)}>Detail</button>
                                </div>
                                
                        ))}
                        </div>
                        <CustomPagination  currentPage={currentPage} onPageChange={handlePageChange} pageCount={20}/>
                </div>
        )
}
export default PokemonPageLayout