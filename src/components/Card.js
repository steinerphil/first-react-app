import './Card.css';

function Card({character}) {
    return (
        <div className="card">
            <h2>{character.name}</h2>
            <p>{character.origin.name}</p>
            <img src={character.image} className="img"/>
        </div>
    );
}

export default Card;