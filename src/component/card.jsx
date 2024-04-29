import React, { useState } from 'react';
import './card.css';
import cards from '../../src/data';


function Card() {
    const [items, setItems] = useState(cards);

    const handleDelete = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    }



    return (
        <div className='wrapper'>
            {items.map((card, index) => (
                <div key={index} className="card" index={index}>
                    <img src={card.thumbnail} className="card-img-top" alt="rasm bor" />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                    </div>
                    <div className="btns">
                        <button className='delete' onClick={() => handleDelete(card.id)}>Delete</button> 
                        <div className="remo">
                            <button className='kamaytirish'>-</button>
                            <button className='ora'>0</button>
                            <button className='kopaytirish'>+</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;
