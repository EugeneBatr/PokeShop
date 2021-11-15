import React from 'react'

export const MaterialCard = (name, image, price) => {
        return (
                <div>
                        <div>
                                <div>{name}</div>
                                <img src={image}/>
                                <div>{price}</div>
                        </div>
                </div>
        )
}
