import React from 'react'
import { Search } from './Search'
import "./Style.css/Navbar.css"
export const Navbar = ({size,setshow}) => {
    return (
        <nav>
            <div className='nav-box'>
                <span className='shopping'onClick={()=>setshow(true)}>
                    BuDdInG
                </span>
               
                <div className='cart' onClick={()=>setshow(false)}>
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}
