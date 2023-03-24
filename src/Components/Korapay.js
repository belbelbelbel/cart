import React from 'react'
import list from "./Data"
import "./Style.css/korapay.css"
import { Card } from './Card'
import { Search } from './Search'
export const Korapay = ({ handleclick }) => {
  return (
    <section>
      
        {
          list.map((item) => (
            
            <Card item={item} key={item.id} handleclick={handleclick} /> 
            
          ))
        }

    </section>
  )
}
