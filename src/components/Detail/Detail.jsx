import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () =>{
    const URL_BASE="https://be-a-rym.up.railway.app/api";
    const KEY="0fc22a0d5b38.c4416e5ef4b2d6b9480b";
    const {detailId} = useParams();
    const [character,setCharacter] = useState({})
    useEffect(()=>{
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((response)=>setCharacter(response.data))
    },[])
return(
    <div>
        {
            character.name ?
            (<>
                        <h2>Name:{character.name}</h2>
            <p>Status{character.status}</p>
            <p>Specie:{character.species}</p>
            <p>Gender:{character.gender}</p>
            <p>Origin:{character.origin?.name}</p>
            <img src={character.image} alt="img"></img>
            </>)
            :<h1>Loading...</h1>
        }
        </div>

    )
}

export default Detail