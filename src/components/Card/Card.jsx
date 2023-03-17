import React, { useState } from 'react';
import {Contenedor,Boton} from "./styledComponents.js";
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { addFavorite, removeFavorite } from '../../redux/actions.js';
import { useEffect } from 'react'

function Card({id,name,species,gender,image,onClose,addFavorite,removeFavorite,myFavorites}) {

   const [isFav,setIsFav]=useState(false)
   const handleFavorite = () =>{
      if(isFav ){
         setIsFav(false)
         removeFavorite(id)
      }else{
         setIsFav(true);
         addFavorite({id,name,species,gender,image,onClose})
      }
   }
   // useEffect(() => {
   //    myFavorites.forEach((fav) => {
   //       if (fav.id === id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, [myFavorites]);

   return (
      <Contenedor>
      {isFav ? (
      <button onClick={handleFavorite}>❤️</button>) : (
      <button onClick={handleFavorite}>🤍</button>)}
         <Boton onClick={()=>onClose(id)}>X</Boton>
         <Link to={`/detail/${id}`}>
            <img src={image} alt=""  style={{borderRadius:"99999rem"}} />
         </Link>
         <h2>Name:{name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         
      </Contenedor>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFavorite:(character)=>{dispatch(addFavorite(character))},
      removeFavorite:(id)=>{dispatch(removeFavorite(id))},
   }
   
}



export default connect(null,mapDispatchToProps)(Card);

// O si pongo card(props) deberia poner props.name/props.species en el html
// Card(props) {
   // const { characters } = props;
