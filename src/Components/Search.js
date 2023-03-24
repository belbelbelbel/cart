// import React, { useState } from 'react'
// import list from './Data'
// export const Search = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     return (
//       <>
//         <div className="templateContainer">
//           <div className="searchInput_Container">
//             <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
//               setSearchTerm(event.target.value);
//             }} />
//           </div>
//           <div className="template_Container">
//             {
//               list
//                 .filter((item) => {
//                   if(searchTerm == ""){
//                     return item;
//                   }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                     return item;
//                   }
//                 })
//                 .map((item) => {
//                   return(
//                     <div className="template" key={item.id}>
//                         <img src={item.img} alt="" />
//                         <h3>{item.title}</h3>
//                         <p className="price">${item.price}</p>
//                     </div> 
//                   )
//                 })
//             }
//           </div>
//         </div>
//       </>
//     )
//   }

