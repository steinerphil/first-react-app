import Card from "./Card";
import "./CharacterGallery.css"

function CharacterGallery({characters}) {

    return(
        <section className="body">
            {
                characters.map((character) => {return <Card
                    key={character.id}
                    name={character.name}
                    origin={character.origin.name}
                    image={character.image}
                    gender={character.gender}
                />})
            }
        </section>
    )

}

export default CharacterGallery
