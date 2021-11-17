import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { GET_POKEMON_DETAILS_REQUEST } from '../actions'
import { PokemonDetailsLayout } from '../components'

 const PokemonDetailsPageContainer = () => {
        const dispatch = useDispatch()

        const {name, image, abilities, stats, price} = useSelector(state => state.pokemonsDetails.info.response)

        
        const {id} = useParams()


        useEffect(() => {
                dispatch(GET_POKEMON_DETAILS_REQUEST(id))
                
        },[id])

        

        return (
                <div>{name}</div>
        )
}

export default PokemonDetailsPageContainer