import React, { useState } from 'react';
import { Korapay } from './Components/Korapay';
import { Cart } from './Components/Cart';
import './App.css';
import "./Components/Style.css/korapay.css"
import { Search } from './Components/Search';
import { Navbar } from './Components/Navbar';

function App() {
  const handleclick = (item) => {
    console.log(item)
    let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        ispresent = true
      }
    })
      if(ispresent){
        setwarning(true)
        setTimeout(()=>{
          setwarning(false)
        },2000)
        return;
      }
      setcart([ ...cart, item ])
  
  }

  const handlechange=(item,d)=> {
    let ind = -1;
    cart.forEach((data,index)=> {
      if(data.id === item.id)
        ind = index;
    });
    const tempArr  = cart;
    tempArr[ind] += d
    if(tempArr[ind].amount === 0) 
       tempArr[ind].amount = 1;
      setcart([...tempArr])
  }
  const [show, setshow] = useState(true)
  const [cart, setcart] = useState([])
  const [warning,setwarning] = useState(false)
  return (
    <React.Fragment>
      <Navbar size={cart.length}  setshow={setshow}/>
     
      {
        show? <Korapay handleclick={handleclick} />:<Cart cart={cart} setcart={setcart} handlechange={handlechange}/>
      }

      {
        warning&&<div className='warning'>already added to cart</div>
      }
       {/* <Search/> */}
    </React.Fragment>
  );
}

export default App;
