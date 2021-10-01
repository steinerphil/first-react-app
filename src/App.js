import './App.css';
import Header from "./components/Header/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useState, useEffect} from "react";
import fetchApiService from "./service/fetchApiService";

function App() {

    const [allCharacters, setAllCharacters] = useState([])
    const [find, setFind] = useState("")
    const [nextUrl, setNextUrl] = useState(null)
    const [prevUrl, setPrevUrl] = useState(null)


    function setJsonData(data){
        setAllCharacters(data.results);
        setPrevUrl(data.info.prev);
        setNextUrl(data.info.next);
    }

    //initial fetch
    useEffect(() => {
      fetchApiService('https://rickandmortyapi.com/api/character')
          .then(data => setJsonData(data))
         .catch(error => console.error(error))
    }, []);

    const next = () => {
        if(nextUrl === null){
            console.log("there is no next page")
        } else {
            fetchApiService(`${nextUrl}`)
                .then(data => setJsonData(data))
                .catch(error => console.error(error))
        }
    }

    const prev = () => {
        if(prevUrl === null){
            console.log("there is no prev page")
        } else{
            fetchApiService(`${prevUrl}`)
                .then(data => setJsonData(data))
                .catch(error => console.error(error))
        }
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
          <div className="fields">
              <button onClick={prev}>previous</button>
              <button onClick={next}>next</button>
              <input type="text" onInput={search}/>
          </div>

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
