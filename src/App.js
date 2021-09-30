import './App.css';
import Header from "./components/Header/Header";
import responseCharacters from "./components/characters.json";
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";

function App() {

    const [state, setState] = useState([])

    const handleButtonClick = () => {
        setState(responseCharacters.results)
    }

    const clearAll = () => {
        setState([])
    }

    // const search = ()

  return (
      <>
          <Header title = "Gallery"/>
          <button onClick={handleButtonClick}>Load Characters</button>
          <button onClick={clearAll}>clear</button>
          <CharacterGallery characters={state}/>
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
