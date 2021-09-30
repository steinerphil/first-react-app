import './App.css';
import Header from "./components/Header/Header";
import responseCharacters from "./components/characters.json";
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";

function App() {

    const [state, setState] = useState([])
    const [find, setFind] = useState("")

    const handleButtonClick = () => {
        setState(responseCharacters.results)
    }

    const clearAll = () => {
        setState([])
    }

     const search = (action) => {
         let string = action.target.value;
         setFind(string)
     }

     const print = state.filter((element) => {
             return element.name.toLowerCase().includes(find.toLowerCase())
         })


  return (
      <>
          <Header title = "Gallery"/>
          <button onClick={handleButtonClick}>Load Characters</button>
          <button onClick={clearAll}>clear</button>
          <input type="text" onChange={search}/>
          <CharacterGallery characters={print}/>
      </>
  );
}

export default App;

















// let state = {
//     characters: []
// }
//
// let apiData = fetch("https://rickandmortyapi.com/api/character/1,2")
//     .then(response => response.json())
//     .then(data => {data.result})
//     .then(result => {this.state({characters: result})})
