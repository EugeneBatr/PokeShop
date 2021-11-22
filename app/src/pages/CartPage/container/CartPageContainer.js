import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CartPageContainer = () => {
        const dispatch = useDispatch()
        const {itemsList} = useSelector(state => state.cart)
        console.log(itemsList);
        return (
                <div>
                        
                </div>
        )
}
