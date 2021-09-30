import Card from "./Card";
import "./CharacterGallery.css"

function CharacterGallery({characters}) {

    return(
        <section className="body">
            {
                characters.map(character => <Card key={character.id} character={character}/>)
            }
        </section>
    )

}

export default CharacterGallery
