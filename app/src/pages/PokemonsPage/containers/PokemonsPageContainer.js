import React, { useCallback, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CHANGE_PAGE, GET_POKEMONS_REQUEST } from '../actions'
import PokemonPageLayout from '../components'
import {useHistory} from 'react-router-dom'

const PokemonsPageContainer = () => {
        const dispatch = useDispatch()
        const history = useHistory()

        const {list, isLoading, error, currentPage} = useSelector(state => state.pokemons)

        useEffect(() => {
                dispatch(GET_POKEMONS_REQUEST(currentPage));
        },[currentPage]);

        const handlePageChange = useCallback((page) => {
                dispatch(CHANGE_PAGE(page))
        },[])

        const handleGoToDetails = useCallback((id) => {
                history.push(`/pokemons/${id}`)
        })
        
        return <PokemonPageLayout 
        list={list} 
        isLoading={isLoading}
        handlePageChange={handlePageChange}
        handleGoToDetails={handleGoToDetails}
        />
}
export default PokemonsPageContainer