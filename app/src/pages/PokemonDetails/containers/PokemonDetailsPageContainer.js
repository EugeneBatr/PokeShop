import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ADD_CART_REQUEST } from '../../CartPage/actions'

import { GET_POKEMON_DETAILS_REQUEST } from '../actions'
import { PokemonDetailsLayout } from '../components'

 const PokemonDetailsPageContainer = () => {
        const dispatch = useDispatch()

        const info = useSelector(state => state.pokemonsDetails.info)

        
        const {id} = useParams()


        useEffect(() => {
                dispatch(GET_POKEMON_DETAILS_REQUEST(id))
                
        },[id])

        
       
        const handleIncrement = useCallback(() => {
                const newPokemon = {
                        id: info.id,
                        name: info.name,
                        image: info.image,
                        price: info.price,
                        quantity: 1,
                }
                        dispatch(ADD_CART_REQUEST(newPokemon))
                        console.log(newPokemon);
                },[dispatch])

        return (
                <PokemonDetailsLayout
                        info={info}
                        handleIncrement={handleIncrement}
                />
               
        )
}

export default PokemonDetailsPageContainer