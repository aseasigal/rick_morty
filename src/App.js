import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import {useState} from "react";
import {Routes,Route} from "react-router-dom"
import AboutText from './components/AboutText/AboutText';
import Detail from './components/Detail/Detail.jsx';

function App () {
const [characters,setCharacters] = useState([]);
  const onSearch = (id) => {
    const URL_BASE="https://be-a-rym.up.railway.app/api";
    const KEY="0fc22a0d5b38.c4416e5ef4b2d6b9480b";

    if (characters.find((char)=>char.id === id)){
      return alert("personaje repetido");
    }
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) =>response.json())
    .then((data)=>{
      if(data.name ){
        setCharacters((oldChars)=>[...oldChars,data])
        // de esta manera no estamos tocando el estado, seria como
        //setCharacters([...characters,data])
      }else{
        alert("personaje no encontrado")
      }
    });
  };
  const onClose= (id)=>{
    setCharacters(characters.filter((char)=>char.id !==id))
  }



  return (
    <div style={{ padding: '15px' }}>
        <div classname>
        <Nav onSearch={onSearch}/>
        <Routes>
          <Route path="/about" element={<AboutText/>}/>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path="/detail/:detailId" element={<Detail/>}/>
        </Routes>
      </div>
      <div>

      </div>
    </div>
  )
}


export default App
