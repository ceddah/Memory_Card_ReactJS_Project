import React from 'react'

const Card = ({img,name,id,handleClick}) => {
    return (
        <div className="card" onClick={() => handleClick(id)}>
            <div className="image">
                <img src={img} alt="poke-card" />
            </div>
            <h2 className="poke-name">{name}</h2>
        </div>
    )
}

export default Card
