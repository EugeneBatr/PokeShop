import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GET_POKEMONS_REQUEST } from '../actions'
import PokemonPageLayout from '../components'

const PokemonsPageContainer = () => {
        const dispatch = useDispatch()

        const {list, isLoading, error} = useSelector(state => state.pokemons)

        useEffect(() => {
                dispatch(GET_POKEMONS_REQUEST());
        },[]);
        console.log(list);
        return <PokemonPageLayout list={list} isLoading={isLoading}/>
}
export default PokemonsPageContainer