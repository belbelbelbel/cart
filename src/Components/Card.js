import React from 'react'
import "./Style.css/Card.css"
export const Card = ({ item,handleclick }) => {
    const { title, author, price, img } =item;
    return (
          

        <div className='card'>
            <div className='image-box'>
                <img src={img} alt="image"></img>
            </div>
            <div className='details'>
                <p>{title}</p>
                <p>{author}</p>
                <p>price -${price}</p>
                <button onClick={()=>handleclick(item)}>Add to cart</button>
            </div>
        </div>
    )
}
