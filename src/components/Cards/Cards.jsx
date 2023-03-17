import Card from "../Card/Card.jsx";
import {CardsContainer} from "./styledComponents.js"

export default function Cards({characters, onClose}) {
   return( 
   <CardsContainer>
      {characters.map(({id,name,species,gender,image})=>{
         //             puedo de prop pasarle character pero cuando llamo al name entre llaves
         // debo poner {character.name}, {character.species}
            return(
            <Card
               key={id}
               id={id}
               name={name}
               species={species}
               gender= {gender}
               image={image}
               onClose ={onClose}
            />
            )
         })}
   </CardsContainer>
   );
}
