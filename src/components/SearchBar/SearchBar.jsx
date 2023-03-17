import { useState } from "react";
export default function SearchBar({onSearch}) {
   //                        puedo poner onSearch
   const[id,setId]=useState("");
const handleChange =(event)=>{
   setId(event.target.value);
}
   return (
      <div>
      <input type='search' 
      onChange={handleChange}/>
      <button onClick={()=>onSearch(id)}>Agregar</button>
      {/*    puedo poner onSerach directamente si cambio el prop */}
      </div>
   );
}
