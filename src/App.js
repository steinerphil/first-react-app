import './App.css';
import Header from "./components/Header/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";

function App() {

    const [allCharacters, setAllCharacters] = useState([])
    const [find, setFind] = useState("")

    function fetchData() {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then((data) => setAllCharacters(data.results))
    }


    const clearAll = () => {
        setAllCharacters([])
    }

     const search = (action) => {
         let string = action.target.value;
         setFind(string)
     }

     const handleCharacters = allCharacters.filter((element) => {
             return element.name.toLowerCase().includes(find.toLowerCase())
         })


  return (
      <>
          <Header title = "Gallery"/>
          <button onClick={fetchData}>Load Characters</button>
          <button onClick={clearAll}>clear</button>
          <input type="text" onInput={search}/>
          <CharacterGallery characters={handleCharacters}/>
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
